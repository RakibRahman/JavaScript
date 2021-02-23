//! a generator is a function that can be paused
const getValues = function* () {
  yield 3;
  yield true;
  yield "Rakib";
  yield { name: "King" };
  return "Finished";
};
const valueGen = getValues();

console.log(valueGen.next().value);
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next().value);
