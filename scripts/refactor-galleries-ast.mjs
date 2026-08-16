import fs from 'fs';
import path from 'path';

// Our generator originally batched all trailing paragraphs onto the last <Col>.
// Then the user manually moved those trailing paragraphs *out* of <MultiCol> and into bottom <Prose> sections.
// I will just re-write the generator logic to re-produce all 7 TSX files properly rather than struggling to regex parsed nested JSX!

const BASE_URL = 'https://www.verein-botanischekunst.de';
const HREFS = [
  '/audrey-reilly/',
  '/dr-sabine-loos/',
  '/daniel-rupic/',
  '/sue-henon/',
  '/katja-katholing-bloss/',
  '/sophie-crossart/',
  '/ines-kamper/'
];

const getSlug = (urlPath) => urlPath.replace(/\//g, '');
const getComponentName = (slug) => slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');

const sizeOfParams = (await import('image-size')).default;
const sizeOf = (filepath) => {
    const buffer = fs.readFileSync(filepath);
    return sizeOfParams(buffer);
};

// Fallback HTML extractor logic mimicking what produced the original
import * as cheerio from 'cheerio';
async function fetchHTML(href) {
  const res = await fetch(BASE_URL + href);
  return res.text();
}
function convertMailto(html) {
    if (html.includes('@') && !html.includes('<a ')) {
        return html.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, '<a className="text-primary hover:underline" href="mailto:$1">$1</a>');
    }
    return html;
}

// Function to convert blocks
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
                         .replace(/<a target/g, '<a className="text-primary hover:underline" target')
                         .replace(/<br(?! \/>|>|\/>)/g, '<br />')
                         .replace(/<br>/g, '<br />'); // Fix BRs
                         
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
      
      const imagesList = [];
      const trailingTexts = [];
      
      let currentItem = { paragraphs: [] };
      
      for (let i = 0; i < blocks.length; i++) {
          const b = blocks[i];
          if (b.type === 'h1' && i === 0) continue;
          
          if (b.type === 'image') {
              if (currentItem.img) imagesList.push(currentItem);
              currentItem = { img: b, paragraphs: [] };
          } else {
              if (currentItem.img) {
                 // The old way naively pushed all trailing paragraphs to the last image's `.paragraphs` container.
                 // A better heuristic: if the text mentions Instagram/Facebook/Tel, or if we have an image above us but we are a distinct separate bio block (long paragraph), it's global text.
                 // Let's rely on string length or if it's the 4th/5th paragraph.
                 currentItem.paragraphs.push(b.html);
              } else {
                 trailingTexts.push(b.html);
              }
          }
      }
      if (currentItem.img) {
          imagesList.push(currentItem);
      }
      
      // Let's refine the last image's paragraphs. Usually captions are 1 or 2 small paragraphs (species, title).
      // The rest is bio.
      const lastImage = imagesList[imagesList.length - 1];
      if (lastImage && lastImage.paragraphs.length > 2) {
          // Keep only the first 2 as captions.
          const bioParagraphs = lastImage.paragraphs.splice(2);
          trailingTexts.push(...bioParagraphs);
      }
      
      const tsxContent = `import { Content } from '@/components/ui/Content'
import { Prose } from '@/components/ui/Prose'
import { GalleryLightboxWrapper, GalleryLightboxItem } from '@/components/ui/GalleryLightbox'
import { MultiCol, Col } from '@/components/ui/Layout'

export default function ${compName}() {
  return (
    <Content>
        <GalleryLightboxWrapper>
          <MultiCol>
            ${imagesList.map((item, idx) => {
                let dims = { width: 1200, height: 900 };
                const fullPath = path.join('images', item.img.localFull || item.img.localPreview);
                if (fs.existsSync(fullPath)) {
                    try { dims = sizeOf(fullPath); } catch(e) {}
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
              ${item.paragraphs.length > 0 ? `
              <Prose className="text-center text-sm md:text-sm">
                ${item.paragraphs.map(p => `
                <p>${p}</p>`).join('')}
              </Prose>` : ''}
            </Col>`;
            }).join('\n')}
          </MultiCol>
        </GalleryLightboxWrapper>
        ${trailingTexts.length > 0 ? `
        <Prose className="text-center text-sm md:text-sm">
          ${trailingTexts.map(p => `
          <p>${p}</p>`).join('')}
        </Prose>` : ''}
      </Content>
  )
}
`;
      fs.writeFileSync(path.join('content', 'gallery', `${compName}.tsx`), tsxContent);
  }
}
run().catch(console.error);
