import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log(await page.goto('https://developer.chrome.com/'));

    // Set screen size
    console.log(await page.setViewport({ width: 1080, height: 1024 }));

    // Type into search box
    console.log(await page.type('.search-box__input', 'automate beyond recorder'));

    // Wait and click on first result
    const searchResultSelector = '.search-box__link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
        'text/Customize and automate'
    );
    const fullTitle = await textSelector.evaluate(el => el.textContent);
    console.log(fullTitle);

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
})();