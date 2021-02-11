//Math.floor()
//The Math.floor() function returns the largest integer less than or equal to a given number.

console.log(Math.floor(6.95));
// expected output: 6
console.log(Math.floor(5.05));
// expected output: 5
console.log(Math.floor(1.55));
// expected output: 1
console.log(Math.floor(-5.05));
// expected output: -6

//The Math.round()
// The Math.round() function returns the value of a number rounded to the nearest integer.

console.log(
  "Round Numbers:",
  Math.round(5.95),
  Math.round(5.5),
  Math.round(-5.05)
);
// expected output: 6 6 -5

//Math.random()
//returns random number
// Math.random() * (max - min) + min;
let random = Math.random() * 10 + 2;
console.log("Random Number:", random);
console.log("Floor Random Number:", Math.floor(random));

//Math.sqrt()
// returns the square root of a numbe
function sqr(a, b) {
  return Math.sqrt(a * a + b * b);
}
console.log("Square Number:", sqr(3, 4));

//The Math.trunc()
//The Math.trunc() function returns the integer part of a number by removing any fractional digits
console.log("Trunc Number:", Math.trunc(6.95));

//The Math.pow()
//The Math.pow() function returns the base to the exponent power, that is, base^exponent.
console.log("Pow Number:", Math.pow(7, 3));
// expected output: 343 (7*7*7)
console.log("Pow Number:", Math.pow(10, 3));
// expected output: 1000 (10*10*10)

//The Math.max()
//The Math.max() function returns the largest number
console.log(Math.max(1, 3, 2));
// expected output: 3
console.log(Math.max(50, 20, 100));
// expected output: 100
console.log(Math.max(-1, -3, -2));
// expected output: -1

//The Math.min()
//The Math.min() function returns the smallest number
console.log(Math.min(1, 3, 2));
// expected output: 1
console.log(Math.min(50, 20, 100));
// expected output: 20
console.log(Math.min(-1, -3, -2));
// expected output: -3

const number = [20, 12, 4];

console.log(number, "Max Number:", Math.max(...number));
const number2 = [20, 12, 4];
console.log(number2, "Min Number:", Math.min(...number));
