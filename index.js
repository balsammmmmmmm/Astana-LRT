// Подключаем библиотеку для работы с Telegram API в переменную
const TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
const bot = new TelegramBot(token, { polling: true });

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.on('message', (msg, match) =>{
     const chatId = msg.chat.id;
     const resp = match[1];
     bot.sendMessage(chatId, `Lorem Ipsum has been the industry's standard '${resp}' dummy text ever since the 1500s, when an unknown printer took a galley of ${'ТУТ ДАТА КОТОРУЮ ХОТИТЕ'} type and scrambled it to make a type specimen book.`);
     
})
