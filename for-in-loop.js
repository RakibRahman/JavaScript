//! The purpose of the for-in statement is to enumerate over object properties.
const object = { a: 1, b: 2, c: 3 };
for (const items in object) {
  console.log(`${items} : ${object[items]}`);
}
