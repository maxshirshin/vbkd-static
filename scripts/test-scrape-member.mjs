import * as cheerio from 'cheerio';
import util from 'util';

const BASE_URL = 'https://www.verein-botanischekunst.de';

async function fetchHTML(path) {
  const res = await fetch(BASE_URL + path);
  return res.text();
}

async function run() {
  const html = await fetchHTML('/maxim-shirshin/');
  const $ = cheerio.load(html);
  
  const blocks = [];
  
  // Actually, we can just walk the DOM properly from main
  const walk = (node) => {
    if (node.type === 'text') {
       const text = $(node).text().trim();
       if (text) {
           // check if parent is p, h1, h2, h3, a
           let el = node.parent;
           let tag = el.name;
           if (tag === 'p' || tag.startsWith('h')) {
               // Only push if we haven't already pushed this element
               // actually it's easier to target elements
           }
       }
    }
  }
  
  $('main p, main h1, main h2, main h3, main img').each((_, el) => {
      if (el.tagName === 'img') {
          let a = $(el).closest('a');
          blocks.push({
             type: 'image',
             src: $(el).attr('src'),
             alt: $(el).attr('alt') || '',
             fullSrc: a.length ? a.attr('href') : null
          });
      } else {
          // If a <p> contains <img> don't count it as text if it's ONLY an img
          if ($(el).find('img').length === 0) {
              
              let htmlContent = $(el).html();
              // Check if it's just empty or non-breaking spaces
              if ($(el).text().trim()) {
                 blocks.push({
                     type: el.tagName,
                     html: htmlContent
                 });
              }
          }
      }
  });
  
  console.log(util.inspect(blocks, { showHidden: false, depth: null, colors: true }));
}
run();
