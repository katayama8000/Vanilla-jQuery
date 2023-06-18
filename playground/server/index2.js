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

// null合体演算子
const a = null;
const b = a ?? "default";
console.log(b);

console.log(null ?? 'ng' === 'ok');

// closure
function outer() {
    let outerVal = 'outer';
    function inner() {
        let innerVal = 'inner';
        console.log(outerVal);
        console.log(innerVal);
    }
    return inner;
}

const innerFunc = outer();
innerFunc();

const addFunc = () => {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
    }
}

const add = addFunc();
add();
add();