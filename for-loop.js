// let i = 1;
// for (i; i <= 10; i += 2) {
//   console.log(i);
// }

// let j = 1;
// for (j; j <= 20; j++) {
//   console.log(j * j);
// }

// let k = 50;
// for (k; k >= 40; k--) {
//   console.log(k);
// }

//Example
const numbers = [19.2, 25.3, 49, 71, 6, 10, 11.9];
let count = numbers.length;
console.log("number:", count);

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
  console.log(numbers[i]);
}
console.log(`Total is: $${total} `);
