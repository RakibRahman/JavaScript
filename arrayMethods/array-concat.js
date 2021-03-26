//! This method will merge two or more arrays/values by concatenating it. It returns a new array with the elements.
const myAwesomeArray = [1, 2, 3, 4, 5];
const myAwesomeArray2 = [10, 20, 30, 40, 50];
const all = myAwesomeArray.concat(myAwesomeArray2);
console.log(all);

const letters = ["a", "b", "c"];
const add = letters.concat(1, ["d", "e"]);
console.log(add);
