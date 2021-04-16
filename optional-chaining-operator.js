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
