//! Optional chaining is a process for querying and calling properties, methods on an optional that might currently be null or undefined.
//?  Optional Chaining is an approach to simplify JavaScript expressions for accessing deeply nested values, array items and methods when there is a possibility that a reference may be missing.

const pet = {
  name: "badsha",
  cat: {
    name: "badsha",
  },
};
const dogPet = pet.cat?.name;
const dogPet2 = pet.dog?.name;
console.log(dogPet);
console.log(dogPet2);

let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("foo")?.desc;
console.log(nameBar);

console.log("---------------------");

const user = {
  firstName: "Rakin",
  lastName: "Amin",
  address: {
    city: "Habiganj",
    street: "post office",
    /* house: {
      number: "5",
    },
    */
  },
};
// console.log(user.address.house.number); //! type error
console.log(user?.address?.house?.number); //? undefined
