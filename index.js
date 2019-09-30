require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, function(msg, match) {
const button = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard: [[{text: `Номер Автобуса`, callback_data:`${match}`},]],
        resize_keyboard: true
    })
 };
    bot.sendMessage(msg.from.id, `Чтобы оплатить напишите /оплата "номер траспорта"`, button);
});
 
bot.onText(/\/оплата (.+)/, function(msg, match) {
         const fromId = msg.from.id;
         const resp = match[1]; 
         const randomFirst = Math.floor(1000 + Math.random() * 9000);
         const randomSecond = Math.floor(1000 + Math.random() * 9000);
         const curTime = new Date();
         curTime.setSeconds(curTime.getSeconds() + 21600);

         bot.sendMessage(fromId,
`БИЛЕТ: ${randomFirst}:38:${randomSecond}
СУММА: 90 ТГ.
Дата: ${curTime}
Транспорт: ${resp}
ТЕЛ: 77769097977
ТРАНЗАКЦИЯ: 33853${randomSecond}
ТОО АСТАНА LRT
https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
         });