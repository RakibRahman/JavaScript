let person = {
  name: "John",
  age: 24,
  occupation: "student",
};

//? destructuring and renaming
const { name: firstName, age: occupation, age } = person;
console.log(firstName);
console.log(
  `Candidate Info:  Name: ${firstName}, Age is: ${age},Occupation : ${occupation}`
);

console.log("---------------------");

//? destructuring with default values
let { phone = "01289" } = person;
let { phone: p = "01289" } = person; //renaming

//! destructuring with function arguments

function hello({ name, occupation }) {
  console.log(`Hello ${name} ${occupation}`);
}
hello(person);

console.log("---------------------");

//! Nested Object destructuring
let user = {
  name: "Johan",
  age: 24,
  occupation: "student",
  address: {
    street: "master quarter",
    area: "Main Town",
  },
};
const { name: userName, age: userAge } = user;
const { street, area } = user.address;
console.log(userName + " is " + userAge);
console.log(`User lives in ${street},${area}`);
