import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'

(async () => {
    dotenv.config();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // タイムアウト時間を60秒に設定する
        await page.setDefaultNavigationTimeout(60000);

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

        const num = 4689;
        // 指定のページに移動する
        await Promise.all([
            page.click(`a[href="/domestic/stockInfo/brand?securitiesCode=${num}"]`),
            page.waitForNavigation({ waitUntil: 'networkidle0' })
        ]);

        console.log('5020をクリック');

        // ボタンをクリックしてからモーダルが表示されるまでの動作をシミュレートする
        await page.evaluate(() => {
            const button = document.querySelector('button.showDetail');
            button.click();
            return new Promise((resolve) => setTimeout(resolve, 3000));
        });

        console.log('詳細をクリック');

        // td._text-rの中の文字列を取得する
        const text = await page.evaluate(() => {
            const td = document.querySelector('td._text-r');
            return td.textContent;
        });
        console.log('現在の株価は', text, '円です。');

        await page.screenshot({ path: 'img/neomoba4.png', fullPage: true });
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();