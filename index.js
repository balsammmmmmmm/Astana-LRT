require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
  res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {
  polling: true
});
const botw = require('./scrapper.js');

//оплата за проезд
bot.onText(/\/pay(.+)/, function (msg, match) {
  let fromId = msg.from.id;
  let resp = match[1];
  let response = match[1].slice(-3);
  let randomFirst = Math.floor(100 + Math.random() * 900);
  let randomSecond = Math.floor(1000 + Math.random() * 9000);
  const curTime = new Date();
  curTime.setSeconds(curTime.getSeconds() + 21600);
  const ct = curTime.toString().substring(4, 24);

  bot.sendMessage(fromId, `БИЛЕТ: 0${randomFirst}:38:${randomSecond}\nСУММА: 90 ТГ.\nДата: ${ct}\nТранспорт: ${resp} A${response}\nТЕЛ: 77769097977\nТРАНЗАКЦИЯ: 33853${randomSecond}\nТОО АСТАНА LRT\nhttps://smsbus.kz/cd.jsp?id=00${randomFirst}38${randomSecond}`);
});

//grade

bot.onText(/\/gr(.+)/, function (msg, match) {
  const chatId = msg.chat.id;
  const photo = 'grades.png';

  (async() => {
    
    await edua.initialize();
  
    await edua.login('020924550859', 'Ch@rlycharly2002lool');
  
    await edua.grade();
  
  
  })().then(() => {
    console.log('lol');
    bot.sendPhoto(chatId, photo, { caption: ' ' });
}).catch((err) => {
    console.log(err)
});
});
