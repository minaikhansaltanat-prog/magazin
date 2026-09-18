import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function nextIndex() {
  const files = fs.readdirSync(OUT_DIR).filter((f) => /^screenshot-(\d+)/.test(f));
  const nums = files.map((f) => parseInt(f.match(/^screenshot-(\d+)/)[1], 10));
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const widthArg = process.argv[4] ? parseInt(process.argv[4], 10) : 1440;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: widthArg, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise((r) => setTimeout(r, 300));

// Scroll through the page like a real user so IntersectionObserver-based
// reveal animations and lazy content trigger before the fullPage capture.
await page.evaluate(async () => {
  const step = Math.max(300, window.innerHeight * 0.85);
  let pos = 0;
  const max = document.body.scrollHeight;
  while (pos < max) {
    window.scrollTo({ top: pos, left: 0, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 90));
    pos += step;
  }
  window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'instant' });
  await new Promise((r) => setTimeout(r, 200));
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});
await new Promise((r) => setTimeout(r, 300));

const idx = nextIndex();
const suffix = label ? `-${label}` : '';
const fileName = `screenshot-${idx}${suffix}.png`;
const filePath = path.join(OUT_DIR, fileName);
await page.screenshot({ path: filePath, fullPage: true });

await browser.close();
console.log(`Saved: ${filePath}`);
