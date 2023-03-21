import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'

(async () => {
    dotenv.config();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        // タイムアウト時間を60秒に設定する
        // page.setDefaultNavigationTimeout(60000);
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
        // ログイン後にフォームに銘柄コードを入力する
        await page.evaluate(() => {
            //#neo-head-glassをクリック
            const button = document.querySelector('#neo-head-glass');
            button.click();
            return new Promise((resolve) => setTimeout(resolve, 3000));
        });
        console.log('モーダル表示成功');
        const code = 4689

        // テキストボックスに入力して検索する
        await page.type('#neo-head-text', code.toString()),
            await Promise.all([
                page.click('#neo-head-search'),
                page.waitForNavigation({ waitUntil: 'networkidle0' })
            ]);
        console.log('検索成功');

        // 検索結果の1つ目の要素をクリックする
        // await Promise.all([
        //     page.click('#result-layout li:first-child .title'),
        //     page.waitForNavigation({ waitUntil: 'networkidle0' })
        // ]);
        // await Promise.all([
        //     page.click(`a[href="/domestic/stockInfo/brand?securitiesCode=4689"]`),
        //     page.waitForNavigation()
        // ]);
        // 100ms待つ
        // sleep
        await new Promise(resolve => setTimeout(resolve, 100));
        // await Promise.all([
        //     page.click('a[href="/domestic/stockInfo/brand?securitiesCode=4689"]'),
        //     page.waitForNavigation({ waitUntil: 'networkidle0' })
        // ]);
        // await page.click('a[href="/domestic/stockInfo/brand?securitiesCode=4689"]'),
        //     console.log('画面遷移成功');
        // await page.waitForNavigation({ waitUntil: 'networkidle0' });
        // 指定のリンクをクリックして画面遷移を待機する
        // await Promise.all([
        //     page.waitForSelector('a[href="/domestic/stockInfo/brand?securitiesCode=4689"]'),
        //     page.click('a[href="/domestic/stockInfo/brand?securitiesCode=4689"]'),
        //     page.waitForNavigation({ waitUntil: 'networkidle0' })
        // ]);

        console.log('画面遷移成功');
        await page.screenshot({ path: 'img/neomoba7.png', fullPage: true });
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();