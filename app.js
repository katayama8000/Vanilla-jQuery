// dayjsの検証
const dayjs = require('dayjs');
// console.log(date);
// // 日本時間
// console.log(date.toLocaleString('ja-JP'));
// // UTC
// console.log(date.toUTCString());

// dayjsで日付のみ取得

console.log(dayjs().startOf('day').toDate());
console.log(dayjs().endOf('day').toDate())
const date = new Date();
console.log(typeof date);
const day1 = dayjs().startOf('day').toDate()
const day2 = dayjs(date)

const day3 = dayjs().endOf('day')
console.log(day3);
console.log(day3.toDate());
console.log(dayjs(day3))
const yesterday = dayjs().subtract(1, 'day').toDate();
console.log(yesterday);

// compare
console.log(dayjs(yesterday).isAfter(day3));
console.log(dayjs(yesterday).isAfter(day3.toDate()));