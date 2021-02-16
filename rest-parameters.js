//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function sum(...theNums) {
  return theNums.reduce((pre, current) => {
    return pre + current;
  });
}
console.log(sum(5, 5, 5));
console.log(sum(15, 15, 15));
