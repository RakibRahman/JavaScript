//! The substring method is same as slice() method but it does not accept any negative index.
let str = "Mango,Banana,Jackfruit";
let newStr = str.substring(0, 5);
let newStr2 = str.substring(7, -3);
console.log(newStr);
console.log(newStr2);
