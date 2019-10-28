const puppeteer = require('puppeteer');
const eduEnu = 'https://edu.enu.kz/';
const grades = 'https://edu.enu.kz/current_progress_gradebook_student';

async function platonus(login, password) {
    const browser = await puppeteer.launch({ headless: false });
   const page = await platonus.browser.newPage();
   await page.setViewport({width: 1000, height: 500});

   await page.goto(eduEnu, { waitUntil: 'networkidle2' });

   await page.waitForSelector('input[name = "iin"]')
   await page.type('input[name = "iin"]', username, {delay: 1});

   await page.waitForSelector('input[name = "password"]')
   await page.type('input[name = "password"]', password, {delay: 1});

   const loginButton = await platonus.page.$x("//button[contains(text(), 'Кіру')]");
   await loginButton[0].click();
   await platonus.page.waitFor(5000);

   await page.goto(grades, { waitUntil: 'networkidle2' });
   await page.waitFor(2000);
   await page.screenshot({path: 'grades.png', fullPage: true});

   browser.close();
};
module.exports = platonus;
