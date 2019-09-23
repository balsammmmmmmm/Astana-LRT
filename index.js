const Telegraf = require('telegraf')

const BOT_TOKEN = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM'
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()