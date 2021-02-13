let person = {
  name: "Ohi",
  age: 19,
};
// switch (person.age) {
//   case 17:
//     console.log(person.name, "is Young");
//     break;
//   case 18:
//     console.log(person.name, "is an adult");
//     break;
//   default:
//     console.log("Unknown");
// }
switch (true) {
  case person.age == 17:
    console.log(person.name, "is Young");
    break;
  case person.age >= 18:
    console.log(person.name, "is an adult");
    break;
  default:
    console.log(person.name, "Not a Adult");
}
switch (new Date().getDay()) {
  case 13:
    console.log("Today is Saturday");
    break;
  case 12:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Unknown");
}
