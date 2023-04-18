// dayjsの検証
const dayjs = require('dayjs');
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
// console.log(date);
// // 日本時間
// console.log(date.toLocaleString('ja-JP'));
// // UTC
// console.log(date.toUTCString());

// dayjsで日付のみ取得

// console.log(dayjs().startOf('day').toDate());
// console.log(dayjs().endOf('day').toDate())
// const date = new Date();
// console.log(typeof date);
// const day1 = dayjs().startOf('day').toDate()
// const day2 = dayjs(date)

// const day3 = dayjs().endOf('day')
// console.log(day3);
// console.log(day3.toDate());
// console.log(dayjs(day3))
// const yesterday = dayjs().subtract(1, 'day').toDate();
// console.log(yesterday);

// // compare
// console.log(dayjs(yesterday).isAfter(day3));
// console.log(dayjs(yesterday).isAfter(day3.toDate()));

// const timezone = require('dayjs/plugin/timezone');
// const utc = require('dayjs/plugin/utc');
// dayjs.extend(utc);
// dayjs.extend(timezone);

// // 日本時間を設定する
// const tokyoTime = dayjs().tz("Asia/Tokyo");
// const now = dayjs().tz("Asia/Tokyo")
// console.log(now.endOf('day').toDate());
// console.log(dayjs().endOf('day'));

// 一時間後
console.log(dayjs().add(1, 'hour').toDate());
const addAHour = dayjs().add(1, 'hour').toDate();
const addADay = dayjs().add(1, 'day').toDate();
// console.log(dayjs(addAHour).isSame(dayjs(), "date"));
// console.log(dayjs(addAHour).isSame(dayjs()));
// console.log(dayjs(addADay).isSame(dayjs(), "date"));
// console.log(dayjs(addADay).isAfter(dayjs(), "date"));
console.log(dayjs(addAHour).isAfter(dayjs(), "day"));
console.log(dayjs(addADay).isSameOrAfter(dayjs(), "day"));