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

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "unknown";
}
console.log(`Today is ${day}`);
