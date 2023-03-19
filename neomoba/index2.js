const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // ログインページにアクセスする
    const tmp = await page.goto('https://trade.sbineomobile.co.jp/login');
    console.log(tmp);

    // ログインボタンをクリックしてログインフォームを表示する
    // await page.click('#header-login');
    // await page.waitForSelector('#login-form');

    // ログインフォームにユーザー名とパスワードを入力する
    await page.type('#login-form input[name="USER_ID"]', 'your-username');
    await page.type('#login-form input[name="PASSWORD"]', 'your-password');

    // ログインボタンをクリックしてログインする
    await page.click('#login-form button[type="submit"]');

    // ログイン後のページに移動する
    await page.waitForNavigation();
    await page.goto('https://www.neomoba.com/top');

    // ログイン後のページでの操作を行う...

    // ブラウザを閉じる
    await browser.close();
})();