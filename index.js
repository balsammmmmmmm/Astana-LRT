const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM'

const bot = new TelegramBot (TOKEN, {polling: true})

bot.on('message', msg -> {
     bot.sendMessage(msg.chat.id, 'hello ${msg.from.first_name}')
})