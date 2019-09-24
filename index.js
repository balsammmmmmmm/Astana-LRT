// require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
//     res.end('')
// })


// // Подключаем библиотеку для работы с Telegram API в переменную
// process.env["NTBA_FIX_319"] = 1;
// const TelegramBot = require('node-telegram-bot-api')

// // Устанавливаем токен, который выдавал нам бот
// const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM'
// // Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// // Подробнее: https://core.telegram.org/bots/api#getupdates
// const bot = new TelegramBot(token, { polling: true})

// // Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
// bot.onText(/\/echo (.+)/, function(msg, match) {
//      const chatId = msg.chat.id;
//      const resp = match[1];
//      const curTime = new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds();
//      const random = Math.Random().getRandom();

//      bot.sendMessage(chatId, 
// `БИЛЕТ: 0078:38:2222
// СУММА: 90 ТГ.
// Дата: ${curTime}
// Транспорт: ${resp}
// ТЕЛ: 77769097977
// ТРАНЗАКЦИЯ: 338532222
// ТОО АСТАНА LRT
// https://smsbus.kz/cd.jsp?id=0078382222`);
     
// })
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, function(msg, match) {
         const chatId = msg.chat.id;
         const resp = match[1];
         const curTime = new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds();
         const randomFirst = Math.floor(1000 + Math.random() * 9000);
         const randomSecond = Math.floor(1000 + Math.random() * 9000);
         const d1 = new Date('2017-03-11T11:30:00');
         d1.toString(); // "Sat Mar 11 11:30:00 UTC+0900 2017"

         bot.sendMessage(chatId,
            `БИЛЕТ: ${randomFirst}:38:${randomSecond}
СУММА: 90 ТГ.
Дата: ${d1} ${curTime}
Транспорт: ${resp}
ТЕЛ: 77769097977
ТРАНЗАКЦИЯ: 33853${randomSecond}
ТОО АСТАНА LRT
https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
         });