//! The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

const nullVal = null;
const blankTxt = "";
const num = 49;

const valA = nullVal ?? "default for A";
const valB = blankTxt ?? "default for B";
const valC = num ?? 0;

console.log(valA);
console.log(valB);
console.log(valC);
