//A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC.

//date objects are created with the new Date() constructor

let currDate = new Date();
console.log(currDate);
console.log(currDate.toLocaleString());
console.log(currDate.toLocaleDateString());
console.log(currDate.toLocaleTimeString());

console.log(currDate.toString());

//!get specific date,time,month,day etc
console.log(currDate.getDate());
console.log(currDate.getMonth());
console.log(currDate.getTime());
console.log(currDate.getFullYear());

console.log("---------------------");
//!set the specific date
console.log(currDate.setFullYear(2022));
console.log(currDate.setFullYear(2022, 10, 25));
console.log(currDate.setDate(5));
console.log("---------------------");

//Date.now() returns milliseconds since 1st january 1970
console.log(`Date.now: ${Date.now()}`);

//JS counts months fro  0 11
//January is 0 ,December is 11

//new Date(year,month,day,hour,minute,second,millisecond)
let oldDate = new Date(1996, 10, 25);
console.log(oldDate.toLocaleString());

console.log("---------------------");

let d = new Date("January 5,2021 12:32:36");
console.log(d);
console.log(d.toLocaleString());
