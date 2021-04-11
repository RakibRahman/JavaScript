//? in non strict mode
function myFunction() {
  console.log(this);
  this.id = "madCoder";
  //!here this is global object (window object in browsers)
}

myFunction();
console.log(id);

console.log("----------------------");

//? in  strict mode
function myFunction2() {
  "use strict";
  console.log(this);
  var names = "madCoder";
}

myFunction2();
