const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM'

const bot = new TelegramBot (process.env.TOKEN)

//bot.on('message', msg -> {
//     bot.sendMessage(msg.chat.id, 'hello ${msg.from.first_name}')
//})
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()