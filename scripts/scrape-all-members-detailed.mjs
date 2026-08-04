import * as cheerio from 'cheerio';
import * as fsSync from "fs";
import fs from 'fs/promises';
import { existsSync } from 'fs';
import https from 'https';
import path from 'path';
import sizeOf from 'image-size'; // We need dimensions for Photoswipe

const BASE_URL = 'https://www.verein-botanischekunst.de';
const HREFS = [
  '/maxim-shirshin/',
  '/audrey-reilly/',
  '/dr-sabine-loos/',
  '/daniel-rupic/',
  '/sue-henon/',
  '/katja-katholing-bloss/',
  '/sophie-crossart/',
  '/ines-kamper/'
];

const getSlug = (urlPath) => urlPath.replace(/\//g, '');
const getComponentName = (slug) => {
  return slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
};

async function fetchHTML(path) {
  const res = await fetch(BASE_URL + path);
  return res.text();
}

function convertMailto(html) {
    if (html.includes('@') && !html.includes('<a ')) {
        return html.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, '<a href="mailto:$1" className="text-primary hover:underline">$1</a>');
    }
    return html;
}

async function run() {
  for (const href of HREFS) {
      console.log('Processing', href);
      const html = await fetchHTML(href);
      const $ = cheerio.load(html);
      const slug = getSlug(href);
      const compName = getComponentName(slug);
      
      const imgDir = path.join('images', 'gallery', slug);

      const blocks = [];
      let imgCounter = 0;
      
      $('main p, main h1, main h2, main h3, main img').each((_, el) => {
          if (el.tagName === 'img') {
              imgCounter++;
              let a = $(el).closest('a');
              const src = $(el).attr('src');
              const fullSrc = a.length ? a.attr('href') : null;
              
              const isFullUrl = src.startsWith('http');
              blocks.push({
                 type: 'image',
                 alt: $(el).attr('alt') || '',
                 localPreview: `gallery/${slug}/image-${imgCounter}.jpg`,
                 localFull: fullSrc ? `gallery/${slug}/image-${imgCounter}-full.jpg` : null,
              });
          } else {
              if ($(el).find('img').length === 0) {
                  let htmlContent = $(el).html();
                  let text = $(el).text().trim();
                  
                  if (text && !text.includes('Zurück zur Galerie')) {
                      htmlContent = htmlContent
                         .replace(/<span class="theming-theme-accent2"><i>([^<]+)<\/i><\/span>/g, '<i className="text-primary-dark block my-4 border-l-2 pl-4 border-primary">$1</i>')
                         .replace(/<span>/g, '')
                         .replace(/<\/span>/g, '')
                         .replace(/class=/g, 'className=')
                         .replace(/<a target/g, '<a className="text-primary hover:underline" target');
                         
                      htmlContent = convertMailto(htmlContent);
                      
                      blocks.push({
                         type: el.tagName,
                         html: htmlContent,
                         text: text
                      });
                  }
              }
          }
      });
      
      const structuredItems = [];
      let currentItem = { paragraphs: [] };
      
      for (let i = 0; i < blocks.length; i++) {
          const b = blocks[i];
          if (b.type === 'h1' && i === 0) continue;
          
          if (b.type === 'image') {
              if (currentItem.img) structuredItems.push(currentItem);
              currentItem = { img: b, paragraphs: [] };
          } else {
              currentItem.paragraphs.push(b.html);
          }
      }
      if (currentItem.img || currentItem.paragraphs.length > 0) {
          structuredItems.push(currentItem);
      }
      
      const titleBlock = blocks.find(b => b.type === 'h1');
      const title = titleBlock ? titleBlock.text : compName;
      
      const tsxContent = `import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox';
import { MultiCol, Col } from '@/components/ui/Layout';

export default function ${compName}() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading as="h1" className="mb-0 text-center">{ "${title}" }</Heading>
        </Container>
      </Section>

      <Section>
        <Container>
         <GalleryLightboxWrapper>
          <MultiCol>
            ${structuredItems.map(item => {
                if (!item.img && item.paragraphs.length > 0) {
                    return `
            <Col span={3} className="prose max-w-none text-center h-full items-center justify-center">
              ${item.paragraphs.map(p => `<p dangerouslySetInnerHTML={{ __html: \`${p.replace(/`/g, '\\`')}\` }} />`).join('\n              ')}
            </Col>`;
                } else if (item.img) {
                    // Try to extract dims if possible, def to 1200x900 as full defaults
                    let dims = { width: 1200, height: 900 };
                    const fullPath = path.join('images', item.img.localFull || item.img.localPreview);
                    if (existsSync(fullPath)) {
                        try {
                            dims = sizeOf(fullPath);
                        } catch(e) {}
                    }

                    const galleryTitle = item.paragraphs.filter(p => !p.includes('href=')).join(' | ').replace(/"/g, "'").replace(/<[^>]*>?/gm, '');

                    return `
            <Col>
              <GalleryLightboxItem
                localPreview="${item.img.localPreview}"
                localFull={${item.img.localFull ? `"${item.img.localFull}"` : 'undefined'}}
                alt="${item.img.alt}"
                title="${galleryTitle}"
                width={${dims.width}}
                height={${dims.height}}
              />
              <Prose className="text-center text-sm md:text-sm">
                ${item.paragraphs.map(p => {
                    const cleanP = p.replace(/class=/g, 'className=');
                    return `<p dangerouslySetInnerHTML={{ __html: \`${cleanP.replace(/`/g, '\\`')}\` }} />`;
                }).join('\n                ')}
              </Prose>
            </Col>`;
                }
                return '';
            }).join('\n')}
          </div>
         </GalleryLightboxWrapper>
        </Container>
      </Section>
    </>
  );
}
`;
      await fs.writeFile(path.join('content', 'gallery', `${compName}.tsx`), tsxContent);
  }
}
run().catch(console.error);
