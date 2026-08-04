import * as cheerio from 'cheerio';
import fs from 'fs/promises';

const BASE_URL = 'https://www.verein-botanischekunst.de';

async function fetchHTML(path) {
  const res = await fetch(BASE_URL + path);
  return res.text();
}

async function scrapeNews() {
    const html = await fetchHTML('/news/');
    const $ = cheerio.load(html);
    const articles = [];
    
    // Attempt to parse out articles intelligently, maybe looking for typical article containers or headers
    $('main .wp-block-post, main article, main .wp-block-group').each((_, el) => {
        const title = $(el).find('h2, h3').text().trim();
        const content = $(el).find('p').map((_, p) => $(p).text().trim()).get().join('\n\n');
        
        if (title || content) {
            articles.push({
                title,
                content
            });
        }
    });

    // Fallback if the structure is simpler
    if (articles.length === 0) {
        $('main h2, main h3').each((_, el) => {
           const title = $(el).text().trim();
           let content = '';
           let next = $(el).next();
           while (next.length && next[0].tagName !== 'h2' && next[0].tagName !== 'h3') {
               if (next[0].tagName === 'p') {
                   content += next.text().trim() + '\n\n';
               }
               next = next.next();
           }
           if (title || content) {
               articles.push({ title, content: content.trim() });
           }
        });
    }

    await fs.writeFile('content/temp-scrape/news.json', JSON.stringify(articles, null, 2));
    console.log(`Scraped ${articles.length} news articles correctly.`);
}

scrapeNews().catch(console.error);
