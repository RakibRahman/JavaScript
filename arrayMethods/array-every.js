//! This method tests the array with a function passed as a parameter. It will return true if each element of the array match the test and false for the opposite.

const numbers = [10, 11, 5, 6, 78, 25];

const isLower = (currentValue) => currentValue < 100;
//output True,each number in the array is lower than 100

console.log(numbers.every(isLower));

const num = [10, 11, 5, 6, 78, 25].every((x) => x === 5);
console.log(num);

const letters = ["a", "b", "c", "d", "e"];
const letterA = ["a", "a", "a", "a", "a"];

console.log(letters.every((test) => test === "c"));
console.log(letterA.every((test) => test === "a"));
