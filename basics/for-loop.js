let x = 1;
for (x; x <= 10; x++) {
  console.log(x);
}
console.log("---------------------");

let t = 0;
let arr = ["R", "A", "K", "I", "B"];
for (t; t < arr.length; t++) {
  console.log(arr[t]);
}
console.log("---------------------");

let y;
for (y = 0; y < 20; y += 2) {
  console.log(y);
}
console.log("---------------------");

//Decremented loop
let o = 20;
for (o; o >= 0; o--) {
  console.log(o);
}
console.log("---------------------");

//!Multiple Statement
let n, m;
for (n = 0, m = 10; n <= 10; n++, m--) {
  console.log(n, m);
}
