const Telegraf = require('telegraf')

const bot = new Telegraf(906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()