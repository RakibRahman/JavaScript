//! The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.(MDN)

let age = 20;

let adult = age >= 18 ? "Adult" : "Teenager";
console.log(adult);

let n = 19;
let remainder = n % 2;
let result = 0 == remainder ? "Even" : "Odd";
console.log(result);

console.log("---------------------");

let animal = "kitty";

let type = animal === "kitty" ? "Meow" : "Woof";
console.log(type);
