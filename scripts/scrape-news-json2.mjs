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
    
    // WordPress posts often use `.wp-block-post` inside a query loop
    $('.wp-block-post').each((_, el) => {
        const title = $(el).find('h2').text().trim();
        const content = $(el).find('.wp-block-post-excerpt__excerpt, p').text().trim();
        const link = $(el).find('h2 a').attr('href') || '#';
        const date = $(el).find('.wp-block-post-date').text().trim();
        
        articles.push({ title, content, link, date });
    });

    await fs.writeFile('content/temp-scrape/news.json', JSON.stringify(articles, null, 2));
    console.log(`Scraped ${articles.length} news articles correctly.`);
}

scrapeNews().catch(console.error);
