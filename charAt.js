// !The charAt() method returns the character at the specified index in a string.
const sentence = "This world shall know pain";

const index = 6;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 6 is o"

// const fruit = "apple";

const fruit = (fruitName, index) => {
  //let fruitName = "Apple";
  //let index = 2;
  console.log(`The letter at ${index} is ${fruitName.charAt(index)}`);
};
fruit("Orange", 2);
