let person = {
  name: "Ohi",
  age: 14,
};

if (person.age >= 18) {
  console.log(person.name, "is an adult");
} else if (person.age <= 16) {
  console.log(person.name, "is Young");
} else {
  console.log(person.name, "is not an adult");
}
