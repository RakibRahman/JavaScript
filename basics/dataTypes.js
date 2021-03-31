//! Primitive data types:
const numberVal = 5;
const strVal = "Hello!";
const boolVal = true;
const nullVal = null;
const undefinedVal = undefined;
const bigIntVal = 9007123254550972n;
const symbolVal = Symbol("label");

// Non-primitive data types:
const myObjLiteral = {
  name: "Obito",
};

const myArray = [9, "book", true, null];

function myFunction(num1, num2) {
  return num1 / num2;
}
myFunction(20, 2);
console.log(myFunction(20, 4));
