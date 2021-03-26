//Postfix Form: counter++
//! The Postfix Form returns the original value of the variable, before the increment/decrement.

//Prefix Form: ++counter
//! The Prefix Form returns the value after the increment/decrement.

let counter = 2;
let counter2 = 2;
console.log(counter++);
console.log(++counter2);

console.log("---------------------");

let i = 0;
while (i++ < 5) {
  console.log(i);
  //postfix
}
console.log("---------------------");
let o = 0;
while (++o < 5) {
  console.log(o);
  //postfix
}
