require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {polling: true});

<<<<<<< HEAD
bot.onText(/\/оплата (.+)/, function(msg, match) {
=======
bot.onText(/\/a (.+)/, function(msg, match) {
>>>>>>> 4aedd6d77398f7c95ccf10d961aaded515af5721
         const chatId = msg.chat.id;
         const resp = match[1];
         const randomFirst = Math.floor(1000 + Math.random() * 9000);
         const randomSecond = Math.floor(1000 + Math.random() * 9000);
         const curTime = new Date();

         bot.sendMessage(chatId,
`БИЛЕТ: ${randomFirst}:38:${randomSecond}
СУММА: 90 ТГ.
Дата: ${curTime}
Транспорт: ${resp}
ТЕЛ: 77769097977
ТРАНЗАКЦИЯ: 33853${randomSecond}
ТОО АСТАНА LRT
https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
         });
