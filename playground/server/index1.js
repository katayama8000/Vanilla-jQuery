const makeShortString = require("make-short-string");
const dayjs = require('dayjs')
// 【配列の要素からオブジェクトを作成する例】

const arr = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 40 }
];

const result = arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.age;
    return accumulator;
}, {});

console.log(result); // { Alice: 20, Bob: 30, Charlie: 40 }

const numbers2 = [40, 20, 50, 10, 30, 11];
numbers2.sort((a, b) => {
    console.log(a, b)
    return a - b
});
console.log(numbers2);

const names = ['Alice', 'Bob', 'Charlie', 'Bob'];
console.log(names.at(-1) === names[names.length - 1]); // true

const str = makeShortString("hello-world", 10);
console.log(str); // hello-worl...

// console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')); // 2021-03-01 17:00:00

const date = new Date();
console.log(date.toLocaleString()); // 2021/3/1 17:00:00    

const yesterday = date.setDate(date.getDate() - 1);
console.log(new Date(yesterday).toLocaleString()); // 2021/2/28 17:00:00

// 比較
console.log(dayjs().isBefore(dayjs().subtract(1, 'day'))); // true
console.log(dayjs(yesterday).isBefore(dayjs())); // true

console.log(dayjs()); // 2021-03-01 17:00:00

console.log(dayjs().isAfter(dayjs())); // false

console.log(dayjs().add(1, 'day').toDate()) // 2021-03-02T17:00:00+09:00
console.log(dayjs().toDate()) // 2021-03-01T17:00:00+09:00
console.log(dayjs().subtract(1, 'day').toDate()) // 2021-02-28T17:00:00+09:00