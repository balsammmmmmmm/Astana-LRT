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
     const curTime = new date().getDate() + '.' + new date().getMonth() + '.' +  new date().getFullYear() + ' ' +  new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
     bot.sendMessage(chatId, `БИЛЕТ: 0078:38:2418 СУММА: 90 ТГ.Дата: ${curData} Транспорт: ${resp} ТЕЛ: 77769097977 ТРАНЗАКЦИЯ: 338536200ТОО АСТАНА LRT https://smsbus.kz/cd.jsp?id=0078382418`);
     
})
