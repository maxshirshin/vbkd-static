import fs from 'fs';
import path from 'path';

const dir = 'content/gallery';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix unclosed `<br>` tags that formatting couldn't pick up because it wasn't caught correctly 
  content = content.replace(/<br(?! \/>|>|\/>)/g, '<br />'); // Basic catch
  content = content.replace(/<br>/g, '<br />'); // Catch the exact instances from the logs

  fs.writeFileSync(filePath, content);
}
