let n = 5;
let factorial = 1;
let i = n;

for (i; i > 1; i--) {
  factorial *= i;
}
console.log(factorial);

console.log("---------------------");

factorial = 1;

let f = 1;
for (f; f <= 10; f++) {
  factorial *= f;
  console.log("Factorial of", f, " is:", factorial);
}
