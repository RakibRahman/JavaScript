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
