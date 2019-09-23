const TelegramBot = require('node-telegram-bot-api')


const bot = new TelegramBot (906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM , {polling: true})

bot.on('message', msg -> {
     bot.sendMessage(msg.chat.id, 'hello ${msg.from.first_name}')
})