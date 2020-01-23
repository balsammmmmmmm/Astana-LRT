const edua = require('./scr.js');
  (async() => {
    
    await edua.initialize();
  
    // await edua.login('020924550859', 'Ch@rlycharly2002lool');
  
    // await edua.grade();
  })().then(() => {
    console.log('Process done!', title);
}).catch((err) => {
    console.log(err)
});
