//Combined Array and Object Destructuring
//+
//For of iteration and destructuring
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];
for (const {
  name: n,
  family: { father: f, mother: m },
} of people) {
  console.log(`Name: ${n} \nFather: ${f} \nMother: ${m}`);
  console.log("-----");
}
//Rest
const numbers = { a: 10, b: 20, c: 30, d: 40 };
const { a, b, ...rest } = numbers;
console.log(a);
console.log(b);
console.log(rest);
console.log("-----");

const students = [
  { roll: 1, name: "ek Number" },
  { roll: 2, name: "dui Number" },
  { roll: 3, name: "tin Number" },
];

const [, , { name: names }] = students;
console.log(names);
