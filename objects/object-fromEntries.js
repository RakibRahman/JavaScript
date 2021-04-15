//! The Object.fromEntries() method transforms a list of key-value pairs into an object.
//? With Object.fromEntries, you can convert from Map to Object
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

console.log(entries);
entries.set("killer", "healer");

const obj = Object.fromEntries(entries);
console.log(obj);

console.log("---------------------");

//! Converting an Array to an Object
const array = [
  ["khan", 2],
  ["talukder", 6],
];
const object = Object.fromEntries(array);
console.log(object);

console.log("---------------------");

//!invert key value pairs
const revertObj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);
console.log(revertObj);

console.log("---------------------");

//!transform objects
const obj1 = { x: 10, b: 9, f: 5 };

const obj2 = Object.fromEntries(
  Object.entries(obj1).map(([key, value]) => [key, value * 2])
);
console.log(obj2);
