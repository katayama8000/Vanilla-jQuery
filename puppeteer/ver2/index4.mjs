import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const SECURITIES_CODE = '4689';

const login = async (page) => {
    await page.goto('https://trade.sbineomobile.co.jp/login');

    // ログインフォームを入力する
    await page.type('input[name="username"]', USERNAME);
    await page.type('input[name="password"]', PASSWORD);
    console.log(USERNAME, PASSWORD);

    // ログインボタンをクリックする
    await Promise.all([
        page.click('#neo-login-btn'),
        page.waitForNavigation({ waitUntil: 'networkidle0' })
    ]);

    console.log('ログイン成功');
};

const navigateToStockInfo = async (page) => {
    console.log(SECURITIES_CODE)
    const url = `https://trade.sbineomobile.co.jp/domestic/stockInfo/brand?securitiesCode=${SECURITIES_CODE}`;
    await page.goto(url);
    console.log('画面遷移成功');
};

const openDetailModal = async (page) => {
    // 1000ミリ秒待つ
    // button.showDetailが読み込まれるまで待機する
    await page.waitForSelector('button.showDetail');
    await page.click('button.showDetail');
    console.log('詳細をクリック');
};

const getCurrentStockPrice = async (page) => {
    // // 少し待つ
    const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
    await sleep(3000);
    const selector = 'td._text-r';
    // await page.waitForSelector(selector);
    // const text = await page.$eval(selector, (element) => element.textContent);
    // console.log('現在の配当金は', text, 'です。');
    // const text = await page.evaluate(() => {
    //     const td = document.querySelector('td._text-r');
    //     return td.textContent;
    // });
    // console.log('現在の配当金は', text, 'です。');
};

const run = async () => {
    console.log("scraiing starts")
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(process.env);

    try {
        // ログインする
        await login(page);

        // 株式情報画面に遷移する
        await navigateToStockInfo(page);

        // 詳細ボタンをクリックする
        await openDetailModal(page);

        // 現在の株価を取得する
        await getCurrentStockPrice(page);
        // スクリーンショットを撮影する
        await page.screenshot({ path: 'img/neomoba8.png', fullPage: true });
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
};

run();