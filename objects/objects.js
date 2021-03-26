const person = {
  name: "pain",
  age: 27,
  birth: 1988,
};
console.log(person);
console.log(person["age"]); //get value
console.log(person.birth);

//assign new value

person["height"] = "5.11ft";
console.log(person);
person.sports = ["cricket", "soccer"];
console.log(person);

//object within array
const akatsuki = [
  { name: "pain", age: 30, move: "shinra tensei" },
  { name: "sasori", age: 40, move: "poison" },
  { name: "deidara", age: 19, move: "explosion" },
];
console.log(akatsuki);
console.log(akatsuki[1]["age"]);
let totalAge = akatsuki[0].age + akatsuki[1].age + akatsuki[2]["age"];
let averageAge = Math.round(totalAge / 3);
console.log("Total Age is:", totalAge);
console.log("Average Age is:", averageAge);
