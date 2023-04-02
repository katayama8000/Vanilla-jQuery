import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'

(async () => {
    console.time('puppeteer');
    const code = 8591;
    dotenv.config({ path: '../.env' });
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);

    const { USERNAME, PASSWORD } = process.env;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto('https://trade.sbineomobile.co.jp/login');

        // ログインフォームを入力する
        await page.type('input[name="username"]', USERNAME);
        await page.type('input[name="password"]', PASSWORD);

        // ログインボタンをクリックする
        await Promise.all([
            page.click('#neo-login-btn'),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
        ]);
        console.log('ログイン成功');

        // 指定のページに移動する
        const url = `https://trade.sbineomobile.co.jp/domestic/stockInfo/brand?securitiesCode=${code}`;
        await Promise.all([
            page.goto(url),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
        ]);
        console.log(`ページ遷移成功`);

        // コードに紐づく銘柄を取得する
        // <h3 class="name">日産科学<h3>
        const brand = await page.$eval('h3.name', (el) => el.innerText);

        console.log(`銘柄名は${brand}です。`);

        // 現在の株価を取得する
        const currentValue = await page.$eval(
            'div.label + span',
            (el) => el.innerText
        );
        console.log(`現在の株価は${currentValue}です。`);

        //ボタンをクリックしてからモーダルが表示されるまでの動作をシミュレートする
        await page.evaluate(() => {
            const button = document.querySelector(
                'button.showDetail'
            );
            button.click();
            return new Promise((resolve) => setTimeout(resolve, 3000));
        });
        console.log('モーダル表示成功');

        // td._text-rの中の文字列を取得する
        const text = (await page.evaluate(() => {
            const td = document.querySelector('td._text-r');
            return td?.textContent;
        }));
        console.log('現在の配当金は', text, 'です。');

        return {
            stockPrice: parseFloat(currentValue.replace(/,/g, '')),
            dividend: Number(text.slice(0, -1)),
            brand,
        };
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await browser.close();
        console.timeEnd('puppeteer');
    }
})();