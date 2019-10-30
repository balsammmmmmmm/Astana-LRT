// const puppeteer = require('puppeteer');
// const eduEnu = 'https://edu.enu.kz/';
// const grades = 'https://edu.enu.kz/current_progress_gradebook_student';

// const platonus = {
//      browser: null,
//      page: null,

//      initialize: async () => {
//           platonus.browser = await puppeteer.launch({
//                args: [
//                     '--no-sandbox',
//                     '--disable-setuid-sandbox',
//                     '--disable-dev-shm-usage',
//                     '--single-process'
//                   ],          });
//           platonus.page = await platonus.browser.newPage();
//           await platonus.page.setViewport({width: 1000, height: 500});
//      }, 
     
//      login: async (username, password) => { 
//           await platonus.page.goto(eduEnu, { waitUntil: 'networkidle2' });
//           //await platonus.page.waitFor(1000);
//           // let closeButton = await platonus.page.type('div[class="backdrop-close"]');
//           // await closeButton[0].click();
          
          
//           await platonus.page.type('input[name = "iin"]', username, {delay: 0.2});
//           await platonus.page.type('input[name = "password"]', password, {delay: 0.2});

//           let loginButton = await platonus.page.$x("//button[contains(text(), 'Кіру')]");
//           await loginButton[0].click();
//           await platonus.page.waitFor(3500);
//      },

//      grade: async () => {
//           await platonus.page.goto(grades, { waitUntil: 'networkidle2' });
//           await platonus.page.screenshot({path: 'grades.png', fullPage: true});
//           platonus.browser.close();

//      }
// }

// module.exports = platonus;


const puppeteer = require('puppeteer');
const eduEnu = 'https://edu.enu.kz/';
const grades = 'https://edu.enu.kz/current_progress_gradebook_student';

async function platonus(login, password) {
    const browser = await puppeteer.launch({ headless: false });
   const page = await platonus.browser.newPage();
   await page.setViewport({width: 1000, height: 500});

   await page.goto(eduEnu, { waitUntil: 'networkidle2' });

   await page.waitForSelector('input[name = "iin"]')
   await page.type('input[name = "iin"]', login, {delay: 1});

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

module.exports = platonus