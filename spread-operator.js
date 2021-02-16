/* jshint esversion:6*/
//An Array of fruits
const fruits = ["Apple", "Banana", "Watermelon"];

console.log(...fruits);

//Copy Arrays/Objects

fruitsCopy = [...fruits];
console.log(fruitsCopy);
console.log(fruits === fruitsCopy);
//Important thing to note here is that animals !== animalsCopy (Only a Shallow copy is made)
console.log("---------------------");

const person = { name: "King", age: 38 };

//Shallow copy Person object using spread operator to create personCopy object
const personCopy = { ...person };
console.log(personCopy);

console.log("---------------------");
//Merge Arrays/Objects
const maleActors = ["Brad Pitt", "Chris Evans", "Matt Damon"];

const femaleActors = ["Jennifer Aniston", "Jennifer Lawrence", "Emma Stone"];

const movieActors = [...maleActors, ...femaleActors];

console.log(movieActors);

console.log("---------------------");
//Person1 Object containing the attributes name & age
const person1 = {
  name: "Skay",
  age: 32,
};

//Person2 Object containing the attributes name, age & occupation
const person2 = {
  name: "Rakib",
  age: 38,
  occupation: "Web Developer",
};

const newPerson = { ...person1, ...person2 };
console.log(newPerson);

console.log("---------------------");

//With Strings
const name = "Rakib";
const chars = [...name];
console.log(chars);

console.log("---------------------");
//Argument to a Function

const nums = [1, 2, 3, 4, 5];

const multiply = (a, b, c, d, e) => a * b * c * d * e;

console.log(multiply(...nums));
console.log("---------------------");

//Spread Operator with Destructuring
const info = {
  fname: "Rakib",
  age: 25,
  occupation: "Web Developer",
  skills: "HTML, CSS, JavaScript",
};

//Destructuring the Person object and assigning the values to name & age
//The attributes occupation & skills are automatically assigned to 'others'
//By using the spread operator
const { fname, age, ...others } = info;

console.log(`Name is ${name}`); //Output -> Name is Skay
console.log(`Age is ${age}`); //Output -> Age is 38
console.log(others);
