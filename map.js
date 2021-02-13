const arr = [1, 2, 3, 4, 5];

let map = arr.map(function (n) {
  // n represents each corresponding element at index
  return n * 10;
});
console.log(map);

let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots);
