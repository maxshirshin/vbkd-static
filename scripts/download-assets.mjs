import fs from 'fs/promises';
import path from 'path';

// Generic asset downloader used across the old-site migration.
// Usage: node scripts/download-assets.mjs <manifest.json>
// manifest.json: [{ "url": "https://...", "dest": "news/journal-12.png" }, ...]
// dest is relative to images/

const manifestPath = process.argv[2];
if (!manifestPath) {
  console.error('Usage: node scripts/download-assets.mjs <manifest.json>');
  process.exit(1);
}

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

  for (const { url, dest } of manifest) {
    const destPath = path.join('images', dest);
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    console.log('Downloading', url, '->', destPath);
    const res = await fetch(url);
    if (!res.ok) {
      console.error('  FAILED', res.status, url);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(destPath, buffer);
  }
}

run().catch(console.error);
