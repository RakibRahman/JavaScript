// Find
// The find method returns the first item on the array that passes the condition on the provided function.

const members = [
  {
    name: "Rakib",
    age: 24,
    year: 1996,
  },
  {
    name: "Rakin",
    age: 4,
    year: 2017,
  },
  {
    name: "Labib",
    age: 12,
    year: 2008,
  },
  {
    name: "Sadika",
    age: 11,
    year: 2009,
  },
];

const foundMember = members.find((members) => members.name === "Rakib");
console.log(foundMember);
