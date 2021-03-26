//! 2. copyWithin()
//? The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.this method overwrites the original array.

const id = [49, 50, 51, 52, 53];
const idCopy = id.copyWithin(0, 3, 4);
console.log(idCopy);
const arr = ["a", "b", "c", "d", "e"];
console.log(arr.copyWithin(0, 3, 4));
console.log(arr.copyWithin(1, 3));

console.log([1, 2, 3, 4, 5].copyWithin(-2));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

console.log("---------------------");

//! copy the first two array elements to the last two array elements.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0));

//! Copy the first two array elements to the third and fourth position
const fruitsAll = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruitsAll.copyWithin(2, 0, 2));
