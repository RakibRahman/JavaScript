let colors = ["red", "orange", "blue"]; //Array of strings
console.log(colors.length);

let nums = [12, 15, 96, 49, 50]; //Array of numbers
console.log(nums[3]);
let stuff = [true, null, 98, "pain"]; //Mixed Array

//Array Methods

//add or replace value
colors[2] = "purple";
console.log(colors);
let clr = colors[1][2];
console.log(clr);

//add value to end
colors.push("green", "lime");
console.log(colors);

//remove value from end
colors.pop();
console.log(colors);

let names = ["rakib", "zakir", "ash"];

//add value from start
names.unshift("zetsu");
console.log(names);

//remove value from start
names.shift();
console.log(names);

//merge arrays
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = ["1", "2", "3"];
const array4 = array1.concat(array2);
const array5 = array1.concat(array2, array3);

console.log(array4);
console.log(array5);

//reverse an array
console.log(array5.reverse());

//copy portion of an array
const array6 = ["yahiko", "nagato", "konan"];
console.log(array6.slice(0, 2));

//index
console.log(array6.indexOf("konan"));

//Nested Arrays
const gameBoard = [
  ["x", "x", "x"],
  ["x", "o", "o"],
  ["o", "x", "o"],
];
console.log(gameBoard);
gameBoard[1][2] = "R"; //reassign value
console.log(gameBoard);
