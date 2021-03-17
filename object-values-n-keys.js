//? The Object.values() method returns values from all object's own properties. It returns these values in the form of an array.
//? The Object.keys() method returns  an array of a given object's own enumerable property names.

const person = {
  firstName: "Rakin",
  lastName: "Amin",
  age: 4,
};
console.log(person);

const info = Object.values(person);
console.log(Object.values(info));
info.forEach((intel) => console.log(intel));

console.log(Object.keys(person));

const languages = ["C", "C++", "Java", "Python", "JavaScript"];
console.log(Object.values(languages));

console.log("---------------------");
//check if a object has keys
const item = { id: "🥽", name: "Goggles", price: 1499 };

const hasKeys = !!Object.keys(item);
//? with a double-bang !! we can convert the length of the returned Array to a Boolean, ensuring we get a true or false reading.its not necessary but code practice.
console.log(hasKeys);

const getKeyLength = (x) => Object.keys(x).length;
// const getKeyLength = (x) => Object.values(x).length;

const keyLength = getKeyLength(item);
const keyBool = !!keyLength;
//const up = keyBool.toString().toUpperCase();
console.log(`Keys Available: ${keyBool} - Total Keys: ${keyLength}`);
