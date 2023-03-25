const puppeteer = require('puppeteer');

async function scrapeMoneyForward() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://moneyforward.com/');
    // screen shot
    await page.screenshot({path: 'img/moneyforward.png'});

    // ログイン
    // await page.type('input[name="mfid_user[email]"]', 'your-email@example.com');
    // await page.type('input[name="mfid_user[password]"]', 'your-password');
    // await page.click('button[type="submit"]');

    // 残高を取得
    // await page.waitForNavigation();
    // const balance = await page.$eval('.bank-account-balance__amount', el => el.innerText);
    // console.log(`口座残高: ${balance}`);

    await browser.close();
}

scrapeMoneyForward();