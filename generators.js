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

console.log("---------------------");

function* generatorFunction() {
  console.log("This will be logged first");

  yield "Hello,";

  console.log("I will be printed after the pause");
  yield "World!";
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
