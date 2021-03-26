//! The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

//use substr( when you know the length)
//substr(start,length)
const fruit = "Mango";
console.log(fruit.substr(0, 3));

const name = "Rakibur";
console.log(name.substr(4, 5));

let str = "Mango,Banana,Jackfruit";
let res = str.substr(0, 4);
let res2 = str.substr(-9);
console.log(res);
console.log(res2);
