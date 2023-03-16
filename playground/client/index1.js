const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

// console.log(a.localeCompare(b));
// Expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

const c = 'taro';
const d = 'giro';
// console.log(c.localeCompare(d));

// https://qiita.com/arx8/items/021e19189c9e0f60748e
// 【並列処理の例】
const getData1 = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const urls1 = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

// Promise.all()を使った並列処理
Promise.all(urls1.map(getData1))
    .then(data => console.log(data))
    .catch(error => console.log(error));
// この例では、getData()関数を用意し、それを複数のURLに対してPromise.all()で並列実行しています。各URLから取得したデータが配列でまとめられ、then()メソッドで処理されます。

// レスポンスをhtmlに表示する
Promise.all(urls1.map(getData1))
    .then(data => {
        const html = data.map(post => {
            return `
                <div>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            `;
        }).join('');
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => console.log(error));



