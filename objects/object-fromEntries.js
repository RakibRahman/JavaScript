//! The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

console.log(entries);
entries.set("killer", "healer");

const obj = Object.fromEntries(entries);
console.log(obj);

//invert key value pairs

const revertObj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);
console.log(revertObj);
