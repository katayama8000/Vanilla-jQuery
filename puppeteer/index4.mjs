import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://trade.sbineomobile.co.jp/login');
    await page.type('input[type="text"]', 'puppeteer', { delay: 100 });
    await page.click('input[type="submit"]');
    await page.waitForNavigation();
    console.log(titles);
    await page.screenshot({ path: 'google.png', fullPage: true });
    await browser.close();
})();