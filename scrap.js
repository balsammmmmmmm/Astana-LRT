const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
  
const bot = {
  browser: null,
  page: null,

    initialize: async() => {
        let inst = 'https://www.instagram.com/accounts/login/';
        let username = 'ryojin___';
        let password = 'Aika1997';
        let dm = 'https://www.instagram.com/erulan_666/';

        const browser = await puppeteer.launch({               
              headless: true,
              args: [
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--disable-dev-shm-usage',
              '--single-process'
                  ],});
        const page = await browser.newPage();
        await page.emulate(devices['iPhone 8']);
        await page.goto(inst, { waituntil: 'networkidle2'});
        await page.waitFor(3000);
        await page.type('input[name = "username"]', username );
        await page.type('input[name = "password"]', password );
        await page.click('button[type = "submit"]');
        await page.waitFor(2000);
        await page.goto(dm, { waitUntil: 'networkidle2' });
        await page.click('.fAR91');
        await page.waitFor(2000);
        await page.click('.ItkAi');
        await page.type('.focus-visible', `TELEGRAM TEST`);
        await page.waitFor(300);
        await page.click('.X3a-9 button');
        await page.waitFor(200);
        await browser.close();
      
    }
  }
  module.exports = bot;