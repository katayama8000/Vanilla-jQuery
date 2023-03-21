import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'



(async () => {
    dotenv.config()
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://trade.sbineomobile.co.jp/login');
    // ログインフォームを入力する
    await page.type('input[name="username"]', process.env.USERNAME);
    await page.type('input[name="password"]', process.env.PASSWORD);

    // ログインボタンをクリックする
    await Promise.all([
        page.click('#neo-login-btn'),
        page.waitForNavigation({ waitUntil: 'networkidle0' })
    ]);
    await page.screenshot({ path: 'neomoba.png', fullPage: true });

    console.log('ログイン成功');

    await browser.close();
})();