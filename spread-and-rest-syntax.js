//? Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
//! Split into single items
const country = "Bangladesh";
const letters = [...country];
console.log(letters);

const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 9];

//Access Elements
console.log(...numbers);

console.log(sum(...numbers));

console.log("---------------------");

//!  Rest parameter is used to pass in an unknown number of arguments to a function.

function testRest(arg1, arg2, ...otherArgs) {
  console.log(arg1); // 1
  console.log(arg2); // 2
  console.log(otherArgs); // [3, 4, 5]
}

testRest(1, 2, 3, 4, 5);

//? Spread syntax can appear inside a function or when calling the function. Rest parameter syntax is limited to the function signature itself.
