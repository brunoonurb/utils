const puppeteer = require('puppeteer')

let scrape = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://books.toscrape.com/')
    const result = await page.$$eval('li img', titles =>
      titles.map(titles => titles.getAttribute('alt'))
    )
    browser.close()
    return result
  };
  scrape().then((value) => {
    console.log(value)
  })
  
// let scrape = async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.goto('http://books.toscrape.com/')
//   const result = await page.evaluate(() => {
//     const books = []
//     document.querySelectorAll('section > div > ol > li img')
//             .forEach((book) => books.push(book.getAttribute('alt')))
//     return books
//   })
//   browser.close()
//   return result
// }
// scrape().then((value) => {
//   console.log(value)
// })



// IMPLEMENTADO PARA BUSACA DADOS DO HREF

// let scrape = async () => {
//     const browser = await puppeteer.launch()
//     const page = await browser.newPage()
//     await page.goto('http://books.toscrape.com/')
//     const result = await page.$$eval('li a', titles =>
//       titles.map(titles => titles.innerText)
//     )
//     browser.close()
//     return result
//   };
//   scrape().then((value) => {
//     console.log(value)
//   })