let pcState = "stable";
const keyName = "Laptop";
const app = {
  [pcState]: true,
};
app[keyName] = "msi";
console.log(app);

const person = {
  position: "Developer",
  name: "",
  age: "",
};
const updatePerson = (key, value) => {
  person[key] = value;
};

updatePerson("name", "Rakib"); //? passing key & value to person
updatePerson("age", 24);
updatePerson("position", "Front End Developer");
updatePerson("skills", ["html", "css", "js"]);

console.log(person);
