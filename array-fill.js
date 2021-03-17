//! The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

const arr = [1, 2, 3, 4];

// fill with "value 0" from position 2 until position 4

console.log(arr.fill(0, 2, 4));

console.log("---------------------");

let arr2 = [1, 2, 3, 4, 5];
let arraySize = arr2.length;
let filledArray = new Array(arraySize)
  .fill(null)
  .map(() => ({ hello: "goodbye" }));

console.log(filledArray);
