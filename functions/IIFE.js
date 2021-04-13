//? IIFE - Immediately Invoked Function Expressions

//! to call/invoke a function immediately after its declaration we use IIFE technique

function test() {
  console.log("What is IIFE?");
}
test();

(function test2() {
  console.log("What is IIFE Again?");
})(); // last brackets are to pass argument

const sum = (function sum() {
  return 10 * 10;
})();
console.log(sum);

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
