import puppeteer from 'puppeteer'

const webscraperfunc = async (link:string)=>{
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(link)

    const title = await page.title();
    console.log('Title:', title);

    const button = await page.$('search');

    console.log(button)

  
    // Close the browser
    await browser.close();
}

export default webscraperfunc;