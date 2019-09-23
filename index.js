// Подключаем библиотеку для работы с Telegram API в переменную
const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
const bot = new TelegramBot(token, { polling: true });

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.onText(/\/echo (.+)/, function(msg, match) {
     const chatId = msg.chat.id;
     const resp = match[1];
     const curTime = new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds();
     bot.sendMessage(chatId, 
     `БИЛЕТ: 0078:38:2418
     СУММА: 90 ТГ.
     Дата: ${curTime}
     Транспорт: ${resp}
     ТЕЛ: 77769097977
     ТРАНЗАКЦИЯ: 338536200
     ТОО АСТАНА LRT
     https://smsbus.kz/cd.jsp?id=0078382418`);
     
})

var http = require("http");
setInterval(function() {
    http.get("https://astana-lrt.herokuapp.com/");
}, 300000); // every 5 minutes (300000)