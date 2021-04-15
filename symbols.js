//! A symbol is a unique and immutable data type that is often used to identify object properties.

//? To create a symbol, you write Symbol() with an optional string as its description.

const sym1 = Symbol("pain");
console.log(sym1);
const sym2 = Symbol("banana");
const sym3 = Symbol("banana");
console.log(sym2 === sym3);

const bowl = {
  apple: { color: "red", weight: 136.078 },
  banana: { color: "yellow", weight: 183.151 },
  orange: { color: "orange", weight: 170.097 },
  banana: { color: "yellow", weight: 176.845 },
};
console.log(bowl);

//! with symbol
const bowl2 = {
  [Symbol("apple")]: { color: "red", weight: 136.078 },
  [Symbol("banana")]: { color: "yellow", weight: 183.151 },
  [Symbol("orange")]: { color: "orange", weight: 170.097 },
  [Symbol("banana")]: { color: "yellow", weight: 176.845 },
};
console.log(bowl2);

console.log("---------------------");

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

// console.log(...arrayIterator);

console.log(arrayIterator.next().value);
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next().value);

console.log("---------------------");

const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log(...iterable1);
