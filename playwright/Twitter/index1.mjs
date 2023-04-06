import { chromium } from 'playwright-core';

(async () => {
    console.time('playwright')
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto('https://twitter.com/home?lang=ja');
        // ページ遷移を待つ
        // await frame.waitForURL('https://twitter.com/home?lang=ja');
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
        //　スクショ
        await page.screenshot({ path: `./img/screenshot.png` });


    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await browser.close();
        console.timeEnd('playwright')
    }
})();