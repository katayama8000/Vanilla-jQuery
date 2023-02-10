const randomArr = () => {
    return [...new Array(500)].map(item => { return Math.floor(Math.random() * 500) })
}

const list = randomArr()

let flag = 1;

let point = 0;

const ans = list.filter(item => {
    if (flag === 1) {
        if ((point + item) > 500) {
            flag = -1
        }
    } else {
        if ((point - item) < -500) {
            flag = 1
        }
    }
    point += item * flag
    console.log(item * flag)
    return point <= 500 && point >= -500
})

console.log(ans.length === list.length ? 'OK' : 'NG')