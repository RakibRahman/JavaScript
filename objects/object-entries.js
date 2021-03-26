//? The Object.entries method returns [key, value] pairs.
//? it will return one array for each own property. Each of these arrays will contain two items. The first one is the property. The second one is the value.
//? using with array will return  two items.One is the index of the item and 2nd is the item itself.
const person = {
  firstName: "Rakin",
  lastName: "Amin",
  age: 4,
};
console.log(Object.entries(person));

const languages = ["C", "C++", "Rust", "Python", "JavaScript"];
console.log(Object.entries(languages));
