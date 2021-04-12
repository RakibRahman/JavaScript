// define a function
var myFunction = function () {
  console.log(this);
};

myFunction();

var myFunction2 = function () {
  // "use strict";
  this.user = "rakib";
};

myFunction2();
console.log(user);

var person = {
  firstName: "Harry",
  lastName: "Edison",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
    console.log(person.firstName + " " + person.lastName);
  },
};
person.fullName();

console.log("-------");
// create an object
var myObject = {};

// create a method on our object
myObject.someMethod = function () {
  console.log(this); // myObject
};

// call our method
myObject.someMethod();
