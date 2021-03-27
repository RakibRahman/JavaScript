const person = {
  age: 20,
  job: "Developer",
};
const person2 = {
  age: 23,
  job: "Hacker",
};
const person3 = {};

// const hasKeys = !!Object.keys(person).length;
// console.log(hasKeys);

const hasKeys = (obj) => {
  const key = !!Object.keys(obj).length;
  return `${key} - Total keys in Object: ${Object.keys(obj).length}`;
};

console.log(hasKeys(person));
console.log(hasKeys(person2));
console.log(hasKeys(person3));
