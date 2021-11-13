const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');
  await page.screenshot({path: 'example1.png'});
  await browser.close();
})();


// EMPLEMENTADO A MAIS

//  function screenshot() {
//   setTimeout(async() => {
//     console.log("ola print");

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto("https://relogioonline.com.br/horario/bras%C3%ADlia/");

//     const data =new Date();
//     const ano =data.getFullYear();
//     const mes =data.getMonth();
//     const dia =data.getDay();
//     const segundo =data.getSeconds();
//     const nomeArquivo = `${ano}_${mes}_${dia}_${segundo}`

//     await page.screenshot({ path: `img/example_${nomeArquivo}.png` });
//     await browser.close();

//     screenshot();
//   }, 5000);
// }
// screenshot();


