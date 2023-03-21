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

    console.log('ログイン成功');

    //　pageが読み込まれるまで待つ
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('a[href="/domestic/stockInfo/brand?securitiesCode=5020"]'),
    ]);
    console.log('5020をクリック');
    // スクショ
    await page.screenshot({ path: 'img/neomoba1.png', fullPage: true });

    await browser.close();
})();