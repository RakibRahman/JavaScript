//! Greatest common divisor

//? 4 = 1,2,4

let n = 144;

let range = Math.ceil(Math.sqrt(n));

let divisors = "";

let i = 1;

for (i; i <= range; i++) {
  if (n % i == 0) {
    if (i == n / i) {
      divisors += i + " ";
    } else {
      divisors += i + " " + n / i + " ";
    }
  }
}
console.log(divisors);
