const address = {
  division: "Sylhet",
  city: "Habiganj",
  area: "Master Quarter",
};
const name = {
  givenName: "Rakin",
  surName: "Amin",
};
const person = { ...address, ...name };
console.log(person);

console.log("---------------------");

const id = { name: "labib", job: "Developer" };
const newPerson = { ...id, city: "sylhet" };
console.log(id);
console.log(newPerson);
