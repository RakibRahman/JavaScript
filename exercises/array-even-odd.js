const arr = [1, 2, 3, 4, 5];

let map = arr.reduce(function (n, index) {
  // n represents each corresponding element at index
  return n + index;
});
console.log(map);

if (map % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
