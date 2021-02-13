//reduce gives single output value.
const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 2, 10, 40, 50];

let reduce = arr.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(reduce);
let reduce2 = arr2.reduce(function (accumulator, current) {
  return accumulator * current;
});
console.log(reduce2);
