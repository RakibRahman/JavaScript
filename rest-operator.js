//!The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
//?rest when declare the function
function sum(...theNums) {
  return theNums.reduce((pre, current) => {
    return pre + current;
  });
}
console.log(sum(5, 5, 5));
console.log(sum(15, 15, 15));

console.log("---------------------");

const getAverage = (...scores) => {
  console.log(scores);
  const average = scores.reduce((acc, val) => {
    return acc += val;
  }, 0) / scores.length;
  console.log(average.toFixed(2));
}
const testScores = [100, 200, 300, 900];

getAverage(100, 300, 400);
getAverage(...testScores);

//?arrays
const fruits = ["apple", "orange", "berry"];
const [first, ...restFruits] = fruits;
console.log(first, restFruits);

const berryOnly = restFruits.find((item) => item === "berry");

//? objects
const person = { name: 'luffy', age: 16, occupation: "pirate" };
const { occupation, ...rest } = person;
console.log(occupation);
console.log(rest);