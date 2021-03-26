let n = 3;

if (n < 10 && (2 == n || 3 == n || 5 == n || 7 == n)) {
  console.log(n, " is smaller than 10 & its a prime number");
} else if (n < 10) {
  console.log(n, " is smaller than 10 & its NOT a prime number");
} else if (n == 10) {
  console.log("Same Value");
} else {
  console.log(n, "is greater than 10");
}
console.log("---------------------");

let remainder = n % 2;

if (0 == remainder) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}
console.log("---------------------");

let result;

if (n <= 1) {
  result = "Baby";
} else if (n <= 3) {
  result = "Toddler";
} else if (n <= 12) {
  result = "Kid";
} else if (n < 18) {
  result = "Teenager";
} else if (n >= 18) {
  result = "Adult";
}
console.log("You are a/an ", result);
