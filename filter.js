const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = arr.filter(function (n) {
  return n % 2 == 0;
});
console.log("Even Numbers:", even);

let greater = arr.filter(function (n) {
  return n >= 8;
});
console.log("Greater Numbers:", greater);
