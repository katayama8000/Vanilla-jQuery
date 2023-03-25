import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('www.moneyforward.comにアクセスします。');

    await page.goto('https://moneyforward.com/login');
    // screen shot
    await page.screenshot({ path: 'img/moneyforward2.png', fullPage: true });

    await browser.close();
})();