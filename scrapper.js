const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const inst = 'https://www.instagram.com/accounts/login/';
const dm = 'https://www.instagram.com/erka__02/';

const insbot = {
     browser: null,

     initialize: async () => {
          insbot.browser = await puppeteer.launch({
               headless: true,
               args: [
               '--no-sandbox',
               '--disable-setuid-sandbox',
               '--disable-dev-shm-usage',
               '--single-process'
                    ],
          });
          insbot.page = await insbot.browser.newPage();
     }, 
     
     login: async (username, password) => { 
          
          await insbot.page.emulate(devices['iPhone 8']);


          await insbot.page.goto(inst, { waitUntil: 'networkidle2' });
          //await insbot.page.waitFor(1000);
          // let closeButton = await insbot.page.type('div[class="backdrop-close"]');
          // await closeButton[0].click();
          
          await insbot.page.waitFor(3000);
          await insbot.page.type('input[name = "username"]', username );
          await insbot.page.type('input[name = "password"]', password );

          let loginButton = await insbot.page.$x("//div[contains(text(), 'Войти')]");
          await loginButton[0].click();
          await insbot.page.waitFor(3000);
     },

     direct: async () => {
          await insbot.page.goto(dm, { waitUntil: 'networkidle2' });
          let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
          await loginButton[0].click();
          await insbot.page.waitFor(2000);
     },

     sending: async(msg)=> {
          for (let i = 1; i < 11; i++) { // выведет 0, затем 1, затем 2
          
          await insbot.page.click('.ItkAi');
          await insbot.page.type('.focus-visible', `Елнур ${i} КОТАК СОРДЫ`);
          await insbot.page.waitFor(300);
          await insbot.page.click('.X3a-9 button');
          await insbot.page.waitFor(200);
          }
               // await insbot.browser.close();
     }
     // direct2: async (msg) => {
     //      await insbot.page.goto('https://www.instagram.com/adlzh123', { waitUntil: 'networkidle2' });
     //      let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
     //      await loginButton[0].click();
     //      await insbot.page.waitFor(1700);
     //      for (let i = 0; i < 1; i++) { // выведет 0, затем 1, затем 2
          
     //           await insbot.page.click('.ItkAi');
     //           await insbot.page.type('.focus-visible', `${msg}`);
     //           await insbot.page.waitFor(300);
     //           await insbot.page.click('.X3a-9 button');
     //           await insbot.page.waitFor(200);
     //           }
     // },
     // direct3: async (msg) => {
     //      await insbot.page.goto('https://www.instagram.com/siyrbaev_n/', { waitUntil: 'networkidle2' });
     //      let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
     //      await loginButton[0].click();
     //      await insbot.page.waitFor(1700);
     //      for (let i = 0; i < 1; i++) { // выведет 0, затем 1, затем 2
          
     //           await insbot.page.click('.ItkAi');
     //           await insbot.page.type('.focus-visible', `${msg}`);
     //           await insbot.page.waitFor(300);
     //           await insbot.page.click('.X3a-9 button');
     //           await insbot.page.waitFor(200);
     //           }
               
     // },
     // direct4: async (msg) => {
     //      await insbot.page.goto('https://www.instagram.com/stark_m_/', { waitUntil: 'networkidle2' });
     //      let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
     //      await loginButton[0].click();
     //      await insbot.page.waitFor(1700);
     //      for (let i = 0; i < 1; i++) { // выведет 0, затем 1, затем 2
          
     //           await insbot.page.click('.ItkAi');
     //           await insbot.page.type('.focus-visible', `${msg}`);
     //           await insbot.page.waitFor(300);
     //           await insbot.page.click('.X3a-9 button');
     //           await insbot.page.waitFor(200);
     //           }
     // },
     // direct5: async (msg) => {
     //      await insbot.page.goto('https://instagram.com/winchester_m_/', { waitUntil: 'networkidle2' });
     //      let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
     //      await loginButton[0].click();
     //      await insbot.page.waitFor(1700);
     //      for (let i = 0; i < 1; i++) { // выведет 0, затем 1, затем 2
          
     //           await insbot.page.click('.ItkAi');
     //           await insbot.page.type('.focus-visible', `${msg}`);
     //           await insbot.page.waitFor(300);
     //           await insbot.page.click('.X3a-9 button');
     //           await insbot.page.waitFor(200);
     //           }
     // },
     // direct6: async (msg) => {
     //      await insbot.page.goto('https://www.instagram.com/miras018/', { waitUntil: 'networkidle2' });
     //      let loginButton = await insbot.page.$x("//button[contains(text(), 'Отправить сообщение')]");
     //      await loginButton[0].click();
     //      await insbot.page.waitFor(1700);
     //      for (let i = 0; i < 1; i++) { // выведет 0, затем 1, затем 2
          
     //           await insbot.page.click('.ItkAi');
     //           await insbot.page.type('.focus-visible', `${msg}`);
     //           await insbot.page.waitFor(300);
     //           await insbot.page.click('.X3a-9 button');
     //           await insbot.page.waitFor(200);
     //           }
     // }
}

module.exports = insbot;