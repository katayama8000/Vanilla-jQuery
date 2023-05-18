Promise.resolve().then(() => {
    setTimeout(() => {
        console.log('setTimeout2');
    }, 10);
    console.log('promise1');
});

new Promise((resolve, reject) => {
    console.log('promise2');
    reject();
}).then(() => {
    console.log('promise3');
}).catch(() => {
    console.log('promise4');
});

console.log(Promise.resolve({ name: 'Alice' }))
const tmp = Promise.resolve({ name: 'Alice' })
console.log(typeof tmp)