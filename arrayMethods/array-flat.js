//! The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const numbers = [10, 11, [[5, 6]], 78, 25];
const numbers2 = [10, 11, [5, 6], 78, 25];
const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(numbers.flat());
console.log(numbers2.flat());
console.log(numbers.flat(2));
console.log(arr.flat(Infinity));
