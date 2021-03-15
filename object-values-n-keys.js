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
