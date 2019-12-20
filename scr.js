const puppeteer = require('puppeteer');
(async () => {
  let scr = 'https://trashbox.ru/link/which-iphone-to-buy-for-2020'


  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--single-process'
    ],
  });
  const page = await browser.newPage();

  await page.goto(scr, {
    waituntil: 'networkidle2'
  });
  title = await page.$eval(('.poop'), node => node.innerText.trim());
  console.log(title);

  await browser.close();
})().then(() => {
  console.log('Process done!!!');
}).catch((err) => {
  console.log(err)
});