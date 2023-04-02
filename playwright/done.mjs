import { chromium } from 'playwright-core';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const { USERNAME, PASSWORD } = process.env;

const login = async (page) => {
    await page.type('input[name="username"]', USERNAME);
    await page.type('input[name="password"]', PASSWORD);
    await Promise.all([
        page.click('#neo-login-btn'),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    console.log('ログイン成功');
};

const navigateToStockInfo = async (page, code) => {
    const url = `https://trade.sbineomobile.co.jp/domestic/stockInfo/brand?securitiesCode=${code}`;
    await Promise.all([
        page.goto(url),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    console.log('ページ遷移成功');
};

const getBrand = async (page) => {
    const brand = await page.$eval('h3.name', (el) => el.innerText);
    console.log(`銘柄名は${brand}です。`);
    return brand;
};

const getCurrentValue = async (page) => {
    const currentValue = await page.$eval(
        'div.label + span',
        (el) => el.innerText
    );
    console.log(`現在の株価は${currentValue}です。`);
    return parseFloat(currentValue.replace(/,/g, ''));
};

const getDividend = async (page) => {
    const waitTime = 3000;
    const waitUntilNetworkIdle = { waitUntil: 'networkidle' };

    // ボタンをクリックしてからモーダルが表示されるまでの動作をシミュレートする
    // const button = await page.$('button.showDetail');
    // await button.click();
    await page.click('button.showDetail');
    await page.waitForTimeout(waitTime);
    console.log('モーダル表示成功');

    // td._text-rの中の文字列を取得する
    const td = await page.$('td._text-r');
    const text = await td?.textContent();
    console.log('現在の配当金は', text, 'です。');

    return Number(text.slice(0, -1));
};

(async () => {
    const code = 8591;

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto('https://trade.sbineomobile.co.jp/login');
        await login(page);
        await navigateToStockInfo(page, code);
        const brand = await getBrand(page);
        const currentValue = await getCurrentValue(page);
        const dividend = await getDividend(page);

        return {
            stockPrice: currentValue,
            dividend: dividend,
            brand,
        };
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await browser.close();
    }
})();