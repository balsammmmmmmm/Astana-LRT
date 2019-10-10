require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {polling: true});
//стартовые кнопки
bot.onText(/\/start/, function(msg, match) {
const button = {
    parse_mode: 'markdown',
    disable_web_page_preview: false,
    reply_markup: JSON.stringify({
        keyboard: [
            ['help'],
            ['Расписание']
        ],
        resize_keyboard: true
    })
 };
    bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name} ${msg.from.last_name}`, button);
});
//  ANSWER TO HOW TO PAY
    bot.onText(/help/, function(msg, match) {
        const fromId = msg.from.id;
        bot.sendMessage(fromId, `Чтобы получить билет просто напиши /pay "номер Автобуса"`);
        });
//  SCHEDULE
    bot.onText(/Расписание/, function(msg, match) {
    const button2 = {
        parse_mode: 'html',
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
        keyboard:  [
            [{text: 'Понедельник', callback_data: 'mon'}],
            [{text: 'Вторник', callback_data: 'tue'}],
            [{text: 'Среда', callback_data: 'wed'}],                        
            [{text: 'Четверг', callback_data: 'thu'}],
            [{text: 'Пятница', callback_data: 'fri'}],
            [{text: 'Суббота', callback_data: 'sat'}]
        ]
    })
};
        bot.sendMessage(msg.from.id, `Укажите день недели`, button2);
        });

        bot.onText(/Понедельник/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId,
`Понедельник
8:00 - 8:50	   Математика 1,'лек', ФИТ, 222
9:00 - 9:50	   Математика 1,'лек', ФИТ, 222`);
            });

        bot.onText(/Вторник/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`Вторник
8:00 - 8:50	    Қазақ (орыс) тілі,'прак', ФИТ, 508a
9:00 - 9:50	    Қазақ (орыс) тілі,'прак', ФИТ, 508a
10:00 - 10:50	Математика 1,'прак' , Главный корпус, 240`);
            });
                
        bot.onText(/Среда/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`Среда
10:00 - 10:50	Қазақстанның қазіргі заман тарихы,'лек', ФИТ, 224
11:00 - 11:50	Қазақстанның қазіргі заман тарихы,'лек', ФИТ, 224`);
            });

        bot.onText(/Четверг/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`Четверг
8:00 - 8:50 	Қазақстанның қазіргі заман тарихы,'прак', ФИТ, 301
9:00 - 9:50	    Қазақ (орыс) тілі,'прак' , ФИТ, 307
10:00 - 10:50	Дене шынықтыру,'прак' 
11:00 - 11:50	Дене шынықтыру,'прак' 
12:10 - 13:00	Физики для первой группы не будет
13:10 - 14:00	Физика,'лаб', ЦИСИ , 411 (2 Группа)`);
            });

        bot.onText(/Пятница/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`Пятница
8:00 - 8:50 	Математика 1, Главный корпус, 240
9:00 - 9:50	    Математика 1, Главный корпус, 240
10:00 - 10:50	Шетел тілі,'прак' УАК, 240каб.
12:10 - 13:00	Физика,'лаб', ЦИСИ , 411 (1 Группа)`);
            });

        bot.onText(/Суббота/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`Суббота
10:00 - 10:50	Физика,'лек' ФИТ, 710 каб
11:00 - 11:50	Шетел тілі,'прак' Главный корпус, 240каб.
12:10 - 13:00	Шетел тілі,'прак' Главный корпус, 240каб.
13:10 - 14:00	Физика,'прак', УАК, 331
`);
            });
                
//оплата за проезд
bot.onText(/pay (.+)/, function(msg, match) {
    const fromId = msg.from.id;
    const resp = match[1];
    const response = match.slice(-3);
    const randomFirst = Math.floor(1000 + Math.random() * 9000);
    const randomSecond = Math.floor(1000 + Math.random() * 9000);
    const curTime = new Date();
    curTime.setSeconds(curTime.getSeconds() + 21600);

    bot.sendMessage(fromId,
`БИЛЕТ: ${randomFirst}:38:${randomSecond}\nСУММА: 90 ТГ.\nДата: ${curTime}\nТранспорт: ${resp} A${response}\nТЕЛ: 77769097977\nТРАНЗАКЦИЯ: 33853${randomSecond}\nТОО АСТАНА LRT\nhttps://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
    });
 
// bot.onText(/\/оплата (.+)/, function(msg, match) {
//          const fromId = msg.from.id;
//          const resp = match[1];
//          const randomFirst = Math.floor(1000 + Math.random() * 9000);
//          const randomSecond = Math.floor(1000 + Math.random() * 9000);
//          const curTime = new Date();
//          curTime.setSeconds(curTime.getSeconds() + 21600);

//          bot.sendMessage(fromId,
// `БИЛЕТ: ${randomFirst}:38:${randomSecond}
// СУММА: 90 ТГ.
// Дата: ${curTime}
// Транспорт: ${resp}
// ТЕЛ: 77769097977
// ТРАНЗАКЦИЯ: 33853${randomSecond}
// ТОО АСТАНА LRT
// https://smsbus.kz/cd.jsp?id=${randomFirst}38${randomSecond}`);
//          });