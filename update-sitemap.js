const fs = require('fs');
const path = require('path');

// Extract slugs directly from the file to avoid compiling typescript here
const tsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'beforeAfterExamples.ts'), 'utf-8');
const slugs = Array.from(tsContent.matchAll(/slug: '([^']+)'/g)).map(m => m[1]);

let xmlAdditions = `  <url>\n    <loc>https://textglow.io/tools/examples</loc>\n    <lastmod>2026-05-08</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
for (const slug of slugs) {
    xmlAdditions += `  <url>\n    <loc>https://textglow.io/tools/examples/${slug}</loc>\n    <lastmod>2026-05-08</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
}

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

sitemapContent = sitemapContent.replace('</urlset>', xmlAdditions + '</urlset>');
fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Sitemap updated.');
