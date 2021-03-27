//! Array in object

let students = {
  total: 10,
  names: ["rakib", "sakib", "jakir", "ohi", "killer"],
  id: [40, 45, 96, 49],
};
let std2 = students.names[2];
console.log(std2);
//loop through object
for (item in students) {
  console.log(item + ": " + students[item]);
}
//? for in to get key
//? for of to get values

//! Object in array

let foods = [
  "meat",
  {
    type: "vegetable",
    cost: 40,
    names: "carrot",
  },
];
console.log(foods[1].type);
