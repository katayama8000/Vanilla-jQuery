import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/');
    await page.type('input[type="text"]', 'puppeteer', { delay: 100 });
    await page.click('input[type="submit"]');
    await page.waitForNavigation();
    const titles = await page.$$eval('#search a > h3', els => els.map(el => {
        console.log(el);
        return el.innerText
    }));
    console.log(titles);
    await page.screenshot({ path: 'google.png', fullPage: true });
    await browser.close();
})();