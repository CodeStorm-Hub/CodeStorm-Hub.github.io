const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const file = 'file://' + path.resolve(__dirname, 'print-ready.html');
  await page.goto(file, {waitUntil: 'networkidle0'});
  // Give fonts a moment
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 250)));
  const out = path.resolve(__dirname, 'CodeStorm-VisitingCard-print-ready.pdf');
  await page.pdf({path: out, width: '3.75in', height: '2.25in', printBackground: true, margin: {top: '0in', right: '0in', bottom: '0in', left: '0in'}});
  console.log('Saved PDF to', out);
  await browser.close();
})();