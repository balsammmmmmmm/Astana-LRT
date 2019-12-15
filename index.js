require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
  res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {
  polling: true
});

//оплата за проезд
bot.onText(/\/1(.+)/, function (msg, match) {
  let chatId = msg.chat.id;
  let resp = match[1];
  let response = match[1].slice(-3);
  let randomFirst = Math.floor(100 + Math.random() * 900);
  let randomSecond = Math.floor(1000 + Math.random() * 9000);
  const curTime = new Date();
  curTime.setSeconds(curTime.getSeconds() + 21600);
  const ct = curTime.toString().substring(4, 24);

  bot.sendMessage(chatId, `БИЛЕТ: 0${randomFirst}:38:${randomSecond}\nСУММА: 90 ТГ.\nДата: ${ct}\nТранспорт: ${resp} A${response}\nТЕЛ: 77769097977\nТРАНЗАКЦИЯ: 33853${randomSecond}\nТОО АСТАНА LRT\nhttps://smsbus.kz/cd.jsp?id=00${randomFirst}38${randomSecond}`);
});

// platonus scrapper
bot.onText(/\/2(.+)/, function (msg, match) {
  let chatId = msg.chat.id;
  let photo = 'grades.png';
  require('./head.js');
  bot.sendPhoto(chatId, photo, { caption: ' ' });
  bot.sendMessage(chatId, 'test');
});
