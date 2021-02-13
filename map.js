//The map() method creates a new array with the results of calling a function for every array element.

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

var persons = [
  { firstname: "Rakib", lastname: "Talukder" },
  { firstname: "Sakib", lastname: "Talukder" },
  { firstname: "Akib", lastname: "Talukder" },
];

function getFullname(item) {
  let fullname = [item.firstname, item.lastname].join(" ");
  return fullname;
}

let nameList = persons.map(getFullname);

// let nameList = persons.map(function getFullname(item) {
//   let fullname = [item.firstname, item.lastname].join(" ");
//   return fullname;
// });

console.log(nameList);
