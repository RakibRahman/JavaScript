//define function
/*jshint esversion: 6 */
function quote() {
  console.log("This World Shall Know Funtion");
  console.log("This World Shall Know Funtion");
  console.log("This World Shall Know Funtion");
}
//execute function
//quote();

let info = function () {
  console.log("Name: Rakib");
  console.log("Age: 25");
  console.log("Birth Year: 1996");
};
//info();

function word(times, name) {
  console.log("Name is:", name);
  console.log("Pain ".repeat(times));
}
word(5, "Rakib");

function says(name, age) {
  console.log(`${name} is ${age} years old `);
}
says("Rakib", 25);

//? function with default parameter
function says(name = "Pain", age = 23) {
  console.log(`${name} is ${age} years old `);
}
says();
says("Obito", 20);

function square(num) {
  console.log(num ** 2);
}
square(9);

//return function
//When a return statement is used in a function body, the execution of the function is stopped.

function sqr(num) {
  return num ** 2;
}
function add(x, y) {
  return x + y;
}
console.log(sqr(add(5, 7)));

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
const result = getRectArea(5, 10);
console.log("area is: ", result);
