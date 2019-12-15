const edua = require('./scrapper');
  (async() => {
    
    await edua.initialize();
  
    await edua.login('020924550859', 'Ch@rlycharly2002lool');
  
    await edua.grade();
  })().then(() => {
    console.log('Process done!');
    // bot.sendPhoto(chatId, photo, { caption: ' ' });
}).catch((err) => {
    console.log(err)
});
