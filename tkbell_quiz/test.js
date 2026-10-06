let now = new Date();

const year = now.getFullYear(); //년도
let month = now.getMonth(); //월(0~)
const day = now.getDate(); //일
const dayName = now.getDay(); //요일(일요일 0)
const hour = now.getHours(); //시간
const minute = now.getMinutes(); //분
const second = now.getSeconds(); //초
const millisecind = now.getMilliseconds(); //밀리초

console.log(now);

console.log(year);
console.log(month);
console.log(day);
console.log(dayName);
console.log(hour);
console.log(minute);
console.log(second);
console.log(millisecind);

now.setFullYear(2021);
console.log(now);
