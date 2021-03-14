let str = "Rakib Talukder";
let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

console.log("---------------------");

//? Reverse string with functions

const reverseString = (string) => {
  const reverse = string.split("").reverse().join("");
  console.log(reverse);
};

reverseString("hello world");
