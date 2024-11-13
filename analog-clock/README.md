let currentDate = Date.now();

let date = new Date(currentDate);
let hour = date.getHours();
let sec = date.getSeconds();
let min = date.getMinutes();
console.log("hour", hour, "sec", sec, "min", min);

🚀 Note:-
console.log(new Intl.DateTimeFormat('default', {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
}).format(date))
// → '2:00:00 pm'

🚀 Note:-
console.log(new Intl.DateTimeFormat('en-US', {
year: 'numeric',
month: 'numeric',
day: 'numeric',
// Time zone to express it in
timeZone: 'Asia/Shanghai',
}).format(date))
// → '12/19/2012'

⭐️ All options-
{
weekday: 'narrow' | 'short' | 'long',
era: 'narrow' | 'short' | 'long',
year: 'numeric' | '2-digit',
month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
day: 'numeric' | '2-digit',
hour: 'numeric' | '2-digit',
minute: 'numeric' | '2-digit',
second: 'numeric' | '2-digit',
timeZoneName: 'short' | 'long',

// Time zone to express it in
timeZone: 'Asia/Shanghai',
// Force 12-hour or 24-hour
hour12: true | false,

// Rarely-used options
hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
formatMatcher: 'basic' | 'best fit'
}
