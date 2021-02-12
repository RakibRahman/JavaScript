var person = {
  username: "Rakib",
  age: 21,
  married: false,
  dateOfBirth: "31/12/96",
};
console.log(person);
console.log(person["username"]);
console.log(person.age);

console.log(Object.values(person)); //get values only

//Object inside object

var user = {
  name: "Killer",
  ID: 49494,
  info: {
    vip: true,
    rank: "gold",
  },
};
console.log(user.info);
console.log(Object.values(user));
console.log(Object.keys(user));
