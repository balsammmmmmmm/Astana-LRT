const puppeteer = require('puppeteer');
const bot = {
    browser: null,
    page: null,

    initialize: async () => {
        let scr = 'https://belavor.github.io/'


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
      }
}
    module.exports = bot;