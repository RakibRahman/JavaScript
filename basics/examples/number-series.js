//! Series 1 = 0 2 4 6 8 10 12 14 16 18
let series = "";
let n;

for (let i = 0; i < 10; i++) {
  n = i * 2;
  series = series + n + " ";
}
console.log("Series 1:", series);

console.log("---------------------");

//! Series 2: 1 4 7 10 13 16 19 22 25 28

series = "1 ";
n = 1;
for (let i = 1; i < 10; i++) {
  n = n + 3;
  series = series + n + " ";
}
console.log("Series 2:", series);

console.log("---------------------");

//! Series 3 = 0 3 8 15 24 35 48

series = "";
n = 1;
for (let i = 1; i < 10; i++) {
  n = i * i - 1;
  series = series + n + " ";
}
console.log("Series 3:", series);

console.log("---------------------");

//! Series 4 : 1 4 3 8 5 12 7 16 9
series = "";
let num;
let j = 1;
for (j; j < 10; j++) {
  num = j;
  if (num % 2 == 0) {
    num = j * 2;
  }
  // else {
  //     num = j * 0;
  //   }
  series = series + num + " ";
}
console.log("Series 4:", series);

console.log("---------------------");

//! Series 5 = 0 1 2 3 5 8 13 (Fibonacci series)
series = "0 1 ";

let x = 0;
let y = 0;
let z = 1;
let f = 1;
for (f; f < 10; f++) {
  x = y + z;
  y = z;
  z = x;
  series = series + x + " ";
}
console.log("Series 5:", series);
