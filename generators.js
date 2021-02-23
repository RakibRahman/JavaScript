//! a generator is a function that can be paused
const Getnumbers = function* () {
  yield 3;
  yield true;
  yield "Rakib";
  yield { name: "King" };
  return "Finished";
};
const numbersGen = Getnumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next());
console.log(numbersGen.next().value);
