//? IIFE - Immediately Invoked Function Expressions

//! to call/invoke a function immediately after its declaration we use IIFE technique

function test() {
  console.log("What is IIFE?");
}
test();

(function test2() {
  console.log("What is IIFE Again?");
})(); // last brackets are to pass argument

(function (name) {
  console.log(`Hi There, ${name}`);
})("rakib");
console.log("---------------------");

const sum = (function sum() {
  return 10 * 10;
})();
console.log(sum);

(function (x, y) {
  console.log(x * y);
})(2, 3);
console.log("---------------------");

const user = (function () {
  const a = {
    name: "Nagato",
    uid: 49,
  };
  return a;
})();
const info = (function () {
  return `Hello ${user.name}`;
})();
console.log(info);

const myFunction = (function () {
  const hi = "Hi!";
  return function () {
    console.log(hi);
  };
})();
myFunction();
