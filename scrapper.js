const puppeteer = require('puppeteer');
const eduEnu = 'https://edu.enu.kz/';
const grades = 'https://edu.enu.kz/current_progress_gradebook_student';

const platonus = {
     browser: null,
     page: null,

     initialize: async () => {
          platonus.browser = await puppeteer.launch({
               headless: false
          });
          platonus.page = await platonus.browser.newPage();
          await platonus.page.setViewport({width: 1000, height: 500});
     }, 
     
     login: async (username, password) => { 
          await platonus.page.goto(eduEnu, { waitUntil: 'networkidle2' });
          //await platonus.page.waitFor(1000);
          // let closeButton = await platonus.page.type('div[class="backdrop-close"]');
          // await closeButton[0].click();
          
          
          await platonus.page.type('input[name = "iin"]', username, {delay: 1});
          await platonus.page.type('input[name = "password"]', password, {delay: 1});

          let loginButton = await platonus.page.$x("//button[contains(text(), 'Кіру')]");
          await loginButton[0].click();
          await platonus.page.waitFor(5000);
     },

     grade: async () => {
          await platonus.page.goto(grades, { waitUntil: 'networkidle2' });
          await platonus.page.waitFor(2000);
          await platonus.page.screenshot({path: 'grades.png', fullPage: true});
          platonus.browser.close();

     }
}

module.exports = platonus;