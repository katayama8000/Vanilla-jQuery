const symbol = "GOOGL"; // 取得したい株式のシンボルを指定します

fetch(`https://finance.yahoo.com/quote/${symbol}?p=${symbol}&.tsrc=fin-srch`)
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        console.log(text)
        const htmlDocument = parser.parseFromString(text, "text/html");

        // 株価情報を含むHTML要素を取得します
        const priceElement = htmlDocument.querySelector(".Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)");

        // 株価情報を表示します
        console.log(priceElement.innerText);
    })
    .catch(error => {
        console.error(error);
    });
