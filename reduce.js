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
console.log("---------------------");

const members = [
  {
    name: "Rakib",
    age: 24,
    year: 1996,
  },
  {
    name: "Rakin",
    age: 4,
    year: 2017,
  },
  {
    name: "Labib",
    age: 12,
    year: 2008,
  },
  {
    name: "Sadika",
    age: 11,
    year: 2009,
  },
  {
    name: "Ruhama",
    age: 8,
    year: 2012,
  },
  {
    name: "Faiza",
    age: 4,
    year: 2016,
  },
];

const total = members.reduce(
  (currentAge, currentValue) => currentAge + currentValue.age,
  0
);
console.log(`Total Age: ${total}`);
console.log(`Average Age: ${total / members.length}`);

console.log("---------------------");
const numbers = [100, 23, 23, 23, 23, 67, 45];
const sum = numbers.reduce((acc, value) => (acc += value), 0);
console.log(`Total is ${sum}`);
