import fs from 'fs';
import path from 'path';

// Bypass the fs hook by reading manual buffers
const sizeOfParams = (await import('image-size')).default;

const sizeOf = (filepath) => {
    const buffer = fs.readFileSync(filepath);
    return sizeOfParams(buffer);
};

const dir = 'content/gallery';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Let's find every GalleryLightboxItem call and parse out the localPreview and localFull props to reconstruct dims
  
  // A robust approach: match the whole GalleryLightboxItem block
  content = content.replace(/<GalleryLightboxItem\s+localPreview="([^"]+)"[\s\S]*?localFull=\{\s*([^}]+)\s*\}[\s\S]*?width=\{\d+\}\s+height=\{\d+\}/g, (match, preview, fullMatch) => {
      // The fullMatch might be `undefined` or `'gallery/...'`
      let targetPath = preview;
      if (fullMatch && fullMatch !== 'undefined') {
          targetPath = fullMatch.replace(/['"`]/g, '');
      }
      
      const absoluteImagePath = path.join('images', targetPath);
      let w = 1200;
      let h = 900;
      
      if (fs.existsSync(absoluteImagePath)) {
          try {
             const dims = sizeOf(absoluteImagePath);
             w = dims.width;
             h = dims.height;
          } catch(e) {
             console.error("Failed on", absoluteImagePath, e.message);
          }
      }
      
      return match.replace(/width=\{\d+\}/, `width={${w}}`).replace(/height=\{\d+\}/, `height={${h}}`);
  });

  fs.writeFileSync(filePath, content);
}
console.log("Done");
