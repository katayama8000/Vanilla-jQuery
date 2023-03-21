import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://yahoo.co.jp/');
    await page.screenshot({ path: 'img/yahoo.png' });


    await browser.close();
})();