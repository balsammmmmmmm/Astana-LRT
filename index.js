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
            ['sch']
        ],
        resize_keyboard: true
    })
 };
    bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name} ${msg.from.last_name}`, button);
});
//помощь то рау
    bot.onText(/help/, function(msg, match) {
        const fromId = msg.from.id;
        bot.sendMessage(fromId, `Чтобы получить билет просто напиши /pay "номер Автобуса"`);
        });
    
    bot.onText(/sch/, function(msg, match) {
    const button2 = {
        parse_mode: 'html',
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
        keyboard:  [
            [{text: 'Понидельник', callback_data: 'mon'}],
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

        bot.onText(/Понидельник/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`8:00 - 8:50	Математика 1,'лек' ( Матин Д.Т.), К02. Учебный корпус №2, ФИТ, 222
9:00 - 9:50	Математика 1,'лек' ( Матин Д.Т.), К02. Учебный корпус №2, ФИТ, 222`);
            });

        bot.onText(/Вторник/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, `8:00 - 8:50	Қазақ (орыс) тілі,'прак' ( Шахин А.А.), К02. Учебный корпус №2, ФИТ, 508a
9:00 - 9:50	Қазақ (орыс) тілі,'прак' ( Шахин А.А.), К02. Учебный корпус №2, ФИТ, 508a
10:00 - 10:50	Математика 1,'прак' ( Матин Д.Т.), К01. Учебный корпус №1, УАК, 240`);
            });
                
        bot.onText(/Среда/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`10:00 - 10:50	Қазақстанның қазіргі заман тарихы,'лек' ( Ерменбаева Г.К.), К02. Учебный корпус №2, ФИТ, 224
11:00 - 11:50	Қазақстанның қазіргі заман тарихы,'лек' ( Ерменбаева Г.К.), К02. Учебный корпус №2, ФИТ, 224`);
            });

        bot.onText(/Четверг/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`8:00 - 8:50	Қазақстанның қазіргі заман тарихы,'прак' ( Елемесов С.М.), К02. Учебный корпус №2, ФИТ, 301
9:00 - 9:50	Қазақ (орыс) тілі,'прак' ( Шахин А.А.), К02. Учебный корпус №2, ФИТ, 307
10:00 - 10:50	Дене шынықтыру,'прак' (и.о. профессора Омаров Е.Б.)
11:00 - 11:50	Дене шынықтыру,'прак' (и.о. профессора Омаров Е.Б.)
12:10 - 13:00	
13:10 - 14:00	Физика,'лаб' ( Сергазина А.М.), К03. Учебный корпус №3, ЦИСИ , 411`);
            });

        bot.onText(/Пятница/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`8:00 - 8:50	Математика 1,'прак' ( Матин Д.Т.), К01. Учебный корпус №1, УАК, 240
9:00 - 9:50	Математика 1,'прак' ( Матин Д.Т.), К01. Учебный корпус №1, УАК, 240
10:00 - 10:50	Шетел тілі,'прак' (преподаватель-магистр Сулейменова Ж.А.), К01. Учебный корпус №1, УАК, 224`);
            });

        bot.onText(/Суббота/, function(msg, match) {
            const fromId = msg.from.id;
            bot.sendMessage(fromId, 
`10:00 - 10:50	Физика,'лек' (К. ф.-м. н., и.о профессора Жамбайбеков К.Ж.), К02. Учебный корпус №2, ФИТ, 710
11:00 - 11:50	Шетел тілі,'прак' (преподаватель-магистр Сулейменова Ж.А.), К01. Учебный корпус №1, УАК, 224
12:10 - 13:00	Шетел тілі,'прак' (преподаватель-магистр Сулейменова Ж.А.), К01. Учебный корпус №1, УАК, 224
13:10 - 14:00	Физика,'прак' (К. ф.-м. н., и.о профессора Жамбайбеков К.Ж.), К01. Учебный корпус №1, УАК, 331
`);
            });
                
//оплата за проезд
bot.onText(/pay (.+)/, function(msg, match) {
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