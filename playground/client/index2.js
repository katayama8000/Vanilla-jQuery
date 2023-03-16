
// 【直列処理の例】

const getData2 = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const urls2 = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

// async/awaitを使った直列処理
// const processUrls = async () => {
//     for (const url of urls2) {
//         const data = await getData2(url);
//         console.log(data);
//     }
// };

// processUrls();

// htmlに表示する
const processUrls2 = async () => {
    for (const url of urls2) {
        const data = await getData2(url);
        const html = `
            <div>
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            </div>
        `;
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    }
}

processUrls2();