import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'

(async () => {

    const CODE = 8591;
    dotenv.config({ path: '../.env' });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
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
        // 指定のページに移動する

        const url = `https://trade.sbineomobile.co.jp/domestic/stockInfo/brand?securitiesCode=${CODE}`;
        await Promise.all([
            page.goto(url),
            page.waitForNavigation({ waitUntil: 'networkidle0' })
        ]);

        console.log(`ページ遷移成功`);

        // classがvalueの値を取得する
        const currentValue = await page.$eval('div.label + span', el => el.innerText);

        console.log(currentValue); // 500




        // const value = await page.evaluate(() => {
        //     const element = document.getElementsByClassName('value');
        //     console.log('elementの値は', element, 'です。');
        //     return element;
        // });

        // console.log('valueの値は', value, 'です。');



        // ボタンをクリックしてからモーダルが表示されるまでの動作をシミュレートする
        await page.evaluate(() => {
            const button = document.querySelector('button.showDetail');
            button.click();
            return new Promise((resolve) => setTimeout(resolve, 3000));
        });

        console.log('モーダル表示成功');

        // td._text-rの中の文字列を取得する
        const text = await page.evaluate(() => {
            const td = document.querySelector('td._text-r');
            return td.textContent;
        });
        console.log('現在の配当金は', text, 'です。');

        await page.screenshot({ path: 'img/neomoba3.png', fullPage: true });
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();