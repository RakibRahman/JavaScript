//! The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

const myAwesomeArray = ["a", "b", "c", "d", "e"];

const result = myAwesomeArray.some((test) => test === "d");

console.log(result);

const numbers = [10, 11, 5, 6, 78, 25];

const num = numbers.every((item) => item >= 5);
console.log(num);

const num2 = [10, 11, 5, 6, 78, 25].some((x) => x > 105);
console.log(num2);
