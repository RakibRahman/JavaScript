const email = "md.rr.talukder@gmail.com";
const givenName = "Md. Rakibur Rahman Talukder";
console.log(email.toUpperCase());
console.log(email.toLowerCase());
console.log(email.startsWith("md"));
console.log(email.endsWith("md"));
console.log(`Length of ${email} is ${email.length}`);

console.log("---------------------");
console.log(givenName.indexOf("Rakib"));
console.log(givenName.indexOf("Ra", 6));

console.log("---------------------");

//! The Search Method

const sData = givenName.search("Rakib");
console.log(sData);

//! The Replace Method
//! this method is case sensitive
//! only replaces first match
let str = "Mango,Banana,Jackfruit,Banana";
let newStr = str.replace("Banana", "Berry");

console.log(newStr);

console.log("---------------------");

//!The charCodeAt() Method
//returns unicode of specified index
let jutsu = "shinra tensei";
let lastChar = jutsu.length - 1;
console.log(jutsu.charCodeAt(lastChar));

console.log("---------------------");

// !The Concat() Method
let fName = "Rakibur";
let lName = "Talukder";
let fullName = fName.concat(" ", lName);
console.log(fullName);

//! The trim() Method
//removes whitespace from right and left.
const person = "      Md.  Rakibur  Rahman   Talukder ";
console.log(person);
console.log(person.trim());

//The split() method
//!convert string to array
let letters = "r,a,k,i,b";
console.log(letters.split(",")); //split on commas
console.log(letters.split(" ")); //split on spaces
console.log(letters.split(" | ")); //split on pipe
