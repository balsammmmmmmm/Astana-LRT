const edu = require('./scrapper');

(async() => {
  
  await edu.initialize();

  await edu.login('020924550859', 'Ch@rlycharly2002lool');

  await edu.grade();

  await browser.close();
  
  debugger;

})();

console.log(edu);