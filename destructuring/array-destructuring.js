//! Destructuring Arrays
const myArray = ["rakib", "zakir", "ash"];
const [n1, n2, n3] = myArray;

console.log(n1, n2, n3);
//?  swap values
var o = "email";
var p = "gmail";
console.log(o, p);

[o, p] = [p, o];
console.log(o, p);
//! Arrays within Object
let obj = {
  a: 1,
  b: [2, 5],
};
const {
  a: first,
  b: [second, third],
} = obj;
console.log(first);
console.log(second);
console.log(first * third);

console.log("---------------------");

//! Object within Array
let arrNest = [11, 22, { a: 33 }, 44, 55];
const [a1, b1, { a: c1 }, d1, e1] = arrNest;
console.log(a1, b1, c1, d1, e1);

console.log("---------------------");

//! Nested Array Destructuring
let arrNested = [1, 2, [3, 4], 5, 6];
const [a, b, [c, d], e] = arrNested;
console.log(a, b, c, d, e);
