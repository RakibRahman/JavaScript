//((4+2)*2)/2

function math(x, y, z) {
  var result = ((x + y) * y) / z;

  return result;
}
// console.log(Math.trunc(math(2, 5, 20)));
var result = math(40, 140, 404);
console.log(result.toFixed(2));
console.log("-------------");

function hi(name) {
  console.log(`Hello ${name}`);
}
hi("Rakib");
console.log("-------------");
function displayFullName(firstName, lastName) {
  console.log(`The Full Name is ${firstName} ${lastName}`);
}
displayFullName("Rakib", "Talukder");

console.log("-------------");

function fruitByColor(color) {
  if (color == "green") {
    return "Guava";
  } else if (color == "red") {
    return "Apple";
  } else if (color == "yellow") {
    return "Banana";
  }
}
console.log(`${fruitByColor("red")} is Red`);
console.log(`${fruitByColor("green")} is Green`);
console.log(`${fruitByColor("yellow")} is Yellow`);
console.log("-------------");
//Nested Function
//A Simple Function called myWorld that contains two inner functions
function myWorld() {
  //Inner Function that displays My Hobbies
  function myHobbies() {
    console.log("Music & Programming");
  }

  //Inner Function that displays My Bank Balance
  function myBankBalance() {
    console.log("Not enough money to diplay balance!!!");
  }

  myHobbies();
  //myBankBalance();
}

//Invoking the outer function will invoke the inner function myHobbies() defined within it's body
//Output -> Music & Programming
myWorld();

//Will display an error - Cannot read property, since myBankBalance() is a private function
//myWorld().myBankBalance();
console.log("-------------");
