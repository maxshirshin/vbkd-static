import * as cheerio from 'cheerio';
import fs from 'fs/promises';

const BASE_URL = 'https://www.verein-botanischekunst.de';

async function fetchHTML(path) {
  const res = await fetch(BASE_URL + path);
  return res.text();
}

async function scrapeMembers() {
  const html = await fetchHTML('/mitglieder/');
  const $ = cheerio.load(html);
  
  const members = [];
  $('main a').each((_, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('/') && href !== '/mitglieder/' && !href.includes('wp-content')) {
       // Filter out duplicates
       if (!members.find(m => m.href === href)) {
          members.push({ href });
       }
    }
  });

  for (let m of members) {
     const mHtml = await fetchHTML(m.href);
     const $m = cheerio.load(mHtml);
     m.title = $m('h1').text().trim();
     m.images = [];
     $m('main img').each((_, img) => {
       m.images.push({
         src: $m(img).attr('src'),
         alt: $m(img).attr('alt') || ''
       });
     });
     // Grab paragraphs
     m.paragraphs = [];
     $m('main p').each((_, p) => m.paragraphs.push($m(p).text().trim()));
  }
  
  await fs.writeFile('content/temp-scrape/members.json', JSON.stringify(members, null, 2));
  console.log(`Scraped ${members.length} members`);
}

async function scrapeForm() {
    const html = await fetchHTML('/kontakt/');
    const $ = cheerio.load(html);
    const formHtml = $('form').html();
    await fs.writeFile('content/temp-scrape/form.html', formHtml || 'no form found');
    console.log('Scraped contact form');
}

async function scrapeNews() {
    const html = await fetchHTML('/news/');
    const $ = cheerio.load(html);
    const content = $('main').text().replace(/\s+/g, ' ').trim();
    await fs.writeFile('content/temp-scrape/news.txt', content);
    console.log('Scraped news');
}

async function scrapeMitglied() {
    const html = await fetchHTML('/mitgliedschaft/');
    const $ = cheerio.load(html);
    const content = $('main').text().replace(/\s+/g, ' ').trim();
    await fs.writeFile('content/temp-scrape/mitgliedschaft.txt', content);
    console.log('Scraped mitgliedschaft');
}

await scrapeMembers();
await scrapeForm();
await scrapeNews();
await scrapeMitglied();
