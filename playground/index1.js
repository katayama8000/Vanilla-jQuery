const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0

const c = 'taro';
const d = 'giro';
console.log(c.localeCompare(d));

// https://qiita.com/arx8/items/021e19189c9e0f60748e
// 直列処理
