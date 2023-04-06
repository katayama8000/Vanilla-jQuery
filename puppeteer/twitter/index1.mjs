import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://twitter.com/home?lang=ja');

    // ぺージ遷移を待つ
    // await page.waitForNavigation();
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

    // スクショ
    await page.screenshot({ path: `./img/screenshot.png` });

    await browser.close();
})();