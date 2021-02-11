const numbers = [19.2, 25.3, 49, 71, 6, 10, 11.9];

let total = 0;

for (let item of numbers) {
  total += item;
  console.log(item);
}
console.log(`Total is: $${total} `);
