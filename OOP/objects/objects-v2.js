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

console.log("---------------------");

const userInfo = {
  name: "Rakib",
  age: 25,
  gender: "Male",
};
console.log(userInfo);

//Add / Delete Property

userInfo.email = "md.rr.talukder@gmail.com";
console.log(userInfo);
delete userInfo.gender;
console.log(userInfo);
