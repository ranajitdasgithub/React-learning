let currentDate = Date.now();

let date = new Date(currentDate);
let hour = date.getHours();
let sec = date.getSeconds();
let min = date.getMinutes();
console.log("hour", hour, "sec", sec, "min", min);

console.log(new Intl.DateTimeFormat('default', {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}).format(date))
// → '2:00:00 pm'

console.log(new Intl.DateTimeFormat('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric',
// Time zone to express it in
timeZone: 'Asia/Shanghai',
}).format(date))
// → '12/19/2012'
