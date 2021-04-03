const pain = "this world shall know pain";

const demo = "Hello World !!";

const getFirstChar = (str) => {
  let result = [];
  str
    .split(" ")
    .map((word) => (word.charAt(0) != "" ? result.push(word.charAt(0)) : ""));

  return result;
};

console.log(getFirstChar(pain));
console.log(getFirstChar(demo));
