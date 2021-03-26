let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
//! slice(start, end)
//? slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

let chunk = days.slice(1, 4);
console.log(chunk);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
let last = fruits.slice(-2);
console.log(fruits);
console.log(citrus);
console.log(last);
