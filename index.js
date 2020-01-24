require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
  res.end('');
});
process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');
const token = '906646620:AAHXBYRUtBgPMm2UYNquCOqv3HGhj4LFdMM';
const bot = new TelegramBot(token, {
  polling: true
});

// const keyboard = [
//   [{
//       text: 'A',
//       callback_data: 'A'
//     },
//     {
//       text: 'B',
//       callback_data: 'B'
//     },
//     {
//       text: 'C',
//       callback_data: 'C'
//     }
//   ],
//   [{
//       text: 'D',
//       callback_data: 'D'
//     },
//     {
//       text: 'E',
//       callback_data: 'E'
//     },
//     {
//       text: 'F',
//       callback_data: 'F'
//     }
//   ],
//   [{
//       text: 'G',
//       callback_data: 'G'
//     },
//     {
//       text: 'H',
//       callback_data: 'H'
//     }
//   ]
// ];

// bot.on('callback_query', query => {
//   const {
//     chat,
//     message_id,
//     text
//   } = query.message

//   switch (query.data) {
//     case 'A':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'B':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'C':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'D':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'E':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'F':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'G':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break
//     case 'H':
//       bot.editMessage(`${text}`,{
//         chat_id: chat.id,
//         message_id: message_id
//       })
//       break

//   }
// })
//оплата за проезд
bot.onText(/(.+)/, function (msg, match) {
  let chatId = msg.chat.id;
  let a = 'a';
  let resp = match[1];
  let response = match[1].slice(-3);
  let randomFirst = Math.floor(100 + Math.random() * 900);
  let randomSecond = Math.floor(1000 + Math.random() * 9000);
  const curTime = new Date();
  const ct = curTime.toString().substring(4, 24);


  bot.sendMessage(chatId, `БИЛЕТ: 0${randomFirst}:38:${randomSecond}\nСУММА: 90 ТГ.\nДата: ${ct}\nТранспорт: ${resp} ${a}${response}\nТЕЛ: 77769097977\nТРАНЗАКЦИЯ: 33853${randomSecond}\nТОО АСТАНА LRT\nhttps://smsbus.kz/cd.jsp?id=00${randomFirst}38${randomSecond}`, {
    replymarkup: {
      keyboard
    }
  });
});

// bot.onText(/\/ras/, function (msg) {
//   let chatId = msg.chat.id;
//   const opt = {
//     reply_to_message_id: msg.message_id,
//     reply_markup: ({
//       keyboard: [
//         [{
//             text: 'A',
//             callback_data: 'A'
//           },
//           {
//             text: 'B',
//             callback_data: 'B'
//           },
//           {
//             text: 'C',
//             callback_data: 'C'
//           }
//         ],
//       ]
//     })
//   };
//   bot.sendMessage(chatId, 'R', opt)
// });
// bot.on('polling_error', error => console.log(error))