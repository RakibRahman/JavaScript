//! The purpose of the for-in statement is to enumerate over object properties.
const object = { a: 1, b: 2, c: 3 };
for (const items in object) {
  console.log(`${items} : ${object[items]}`);
}

const name = {
  firstName: "Rakin",
  lastName: "Amin",
  age: 4,
};
console.log(name);

let text = "";

for (let info in name) {
  //console.log(`${info}`);
  text = info + " : " + name[info];
  console.log(text);
}
