const symbol = 'AAPL'; // Appleのシンボル
const apiKey = 'YOUR_API_KEY'; // FMP APIキー

const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${apiKey}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        const prices = data.historical.map(item => item.close); // 株価
        const dividends = data.historical.map(item => item.dividend); // 配当金

        console.log(prices, dividends);
    });