import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://www.verein-botanischekunst.de';
const MEMBERS_JSON = 'content/temp-scrape/members.json';

const getSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const getComponentName = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '');
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const run = async () => {
    const raw = fs.readFileSync(MEMBERS_JSON, 'utf8');
    const members = JSON.parse(raw);
    
    const existingMembers = ['Maxim Shirshin', 'Sue', 'Audrey Reilly'];
    
    for (const member of members) {
        // Skip existing and empty
        if (existingMembers.some(em => member.title.includes(em))) continue;
        if (!member.title) continue;

        const slug = getSlug(member.title);
        const compName = getComponentName(member.title);
        
        console.log(`Processing ${member.title} -> ${slug} -> ${compName}.tsx`);
        
        const imgDir = path.join('images', 'gallery', slug);
        fs.mkdirSync(imgDir, { recursive: true });

        const localImages = [];
        for (let i = 0; i < member.images.length; i++) {
            const img = member.images[i];
            const ext = path.extname(new URL(img.src, BASE_URL).pathname) || '.jpg';
            const imgName = `image-${i + 1}${ext}`;
            const imgPath = path.join(imgDir, imgName);
            const fullUrl = BASE_URL + img.src;
            
            console.log(`  Downloading ${fullUrl}`);
            try {
                await downloadImage(fullUrl, imgPath);
                localImages.push({
                    src: `gallery/${slug}/${imgName}`,
                    alt: img.alt || `Artwork by ${member.title}`
                });
            } catch (e) {
                console.error(`  Failed to download ${fullUrl}`, e.message);
            }
        }
        
        let paragraphs = member.paragraphs.filter(p => p.trim());
        const paragraphsHtml = paragraphs.map(p => `        <p>${p}</p>`).join('\n');
        
        const tsxContent = `import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Prose } from '@/components/ui/Prose';
import { GalleryCard } from '@/components/ui/GalleryCard';

export default function ${compName}() {
  return (
    <>
      <Section className="pb-0 pt-32">
        <Container>
          <Heading level={1} className="mb-8">{ "${member.title}" }</Heading>
          <Prose>
${paragraphsHtml}
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${localImages.map(img => `
            <GalleryCard 
              src="${img.src}" 
              alt="${img.alt}" 
              title="" 
            />`).join('')}
          </div>
        </Container>
      </Section>
    </>
  );
}
`;

        const tsxPath = path.join('content', 'gallery', `${compName}.tsx`);
        fs.writeFileSync(tsxPath, tsxContent);
        
        // Output for galleries.ts
        console.log(`
  {
    slug: "${slug}",
    title: "${member.title}",
    component: () => import("../../content/gallery/${compName}.tsx"),
    coverImage: "${localImages[0]?.src || ''}",
    description: "Botanische Kunst von ${member.title}",
  },
        `);
    }
};

run().catch(console.error);
