const https = require("https");

const symbol = "GOOGL"; // 取得したい株式のシンボルを指定します

https.get(`https://finance.yahoo.com/quote/${symbol}?p=${symbol}&.tsrc=fin-srch`, response => {
    let htmlData = "";

    response.on("data", chunk => {
        htmlData += chunk;
    });

    response.on("end", () => {
        console.log(htmlData)
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlData, "text/html");

        // 株価情報を含むHTML要素を取得します
        const priceElement = htmlDocument.querySelector(".Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)");

        // 株価情報を表示します
        console.log(priceElement.innerText);
    });
}).on("error", error => {
    console.error(error);
});
