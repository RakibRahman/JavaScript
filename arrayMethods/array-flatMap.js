//The method applies a function to each element of the array and then flatten the result into an array. It combines flat() and map() in one function.

const array = [[1], [2], [3], [4], [5]];

const result = array.flatMap((arr) => arr * 10);

result.forEach((element, index) => {
  console.log(`At index ${index} is number ${element}`);
});

const ans = array.flat().map((arr) => arr * 10);
console.log(ans);
