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