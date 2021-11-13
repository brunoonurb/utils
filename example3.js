const puppeteer = require('puppeteer')

let scrape = async () => {
  const browser = await puppeteer.launch({headless: true}) // roda em segundo plano default -> {headless: true}
//   const browser = await puppeteer.launch({headless: false}) //abre um nova aba para visualizacao -> {headless: false}
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  page.click('h3 > a')
  await page.waitForNavigation()
  await page.screenshot({path: 'img/example3.png'})
  const title = await page.$eval(
    'div.product_main h1', divs => divs.innerText
  )
  const price = await page.$eval(
    'div.product_main .price_color', divs => divs.innerText
  )
  browser.close()
  return {title, price}
};
scrape().then((value) => {
  console.log(value)
})



// intrucoes 

// inserir valor em um campo
    // await page.type('#idCampo', 'valor');
//clicar tcha d techado
    // await page.keyboard.press('Enter');
// clicar não tinha um identificador único
    // const result = await page.$x("//td[contains(text(), 'Texto aqui')]");
    // if (result.length > 0) {
    //     await result[0].click();
    //   }




// let scrape = async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto('http://books.toscrape.com/')
//   page.click('h3 > a')
//   await page.waitForNavigation()
//   await page.screenshot({ path: 'img/example3.png' })
//   const result = await page.evaluate(() => {
//     return Array.from(document.querySelectorAll('div.product_main')).reduce(
//       (result, book) => {
//         return {
//           title: book.getElementsByTagName('h1')[0].innerText,
//           price: book.getElementsByClassName('price_color')[0].innerText,
//         }
//       }, {})
//   })
//   browser.close()
//   return result
// }
// scrape().then((value) => {
//   console.log(value)
// })