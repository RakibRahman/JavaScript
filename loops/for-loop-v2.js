var persons = [
  { name: "Ash", age: 21 },
  { name: "Sasuke", age: 91 },
  { name: "Yohan", age: 54 },
  { name: "Yahiko", age: 74 },
];
for (var i = 0; i < persons.length; i++) {
  console.log(persons[i].name);
  console.log(persons[i].age);
  console.log("---------------");
}
//! forEach()
const items = [
  { id: "🍔", name: "Super Burger", price: 150 },
  { id: "🥩", name: "Super Meat", price: 450 },
  { id: "🍜", name: "Super Noodles", price: 180 },
];
const itemLength = items.length;
console.log(itemLength);
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log(`${item.id} - ${item.name} - ${(item.price / 100).toFixed(2)}$`);
}
console.log("---------------------");

//! map()
const halfPrice = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.id === "🍜") {
    halfPrice.push({
      ...item,
      price: item.price / 2,
    });
  } else {
    halfPrice.push(item); //? .push method instead of return ,to add each item to new array
  }
}
console.log(halfPrice);
console.log("---------------------");

//!filter()
const expensiveItems = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.price > 160) {
    expensiveItems.push(item);
  }
}
console.log(expensiveItems);

console.log("---------------------");

//! reduce()
let reduced;
let prev = 0; //initialValue
for (let i = 0; i < items.length; i++) {
  const next = items[i];
  prev = prev + next.price;
}
reduced = prev;
console.log(reduced);

console.log("---------------------");

//! some()
const newItems = [
  { id: "🍔", name: "Super Burger", price: 399, promo: false },
  { id: "🥩", name: "Super Meat", price: 199, promo: false },
  { id: "🍜", name: "Super Noodles", price: 299, promo: true },
];

let isInPromo = false;
for (let n = 0; n > newItems.length; n++) {
  const element = newItems[n];
  if (element.promo) {
    isInPromo = true;
    break;
  }
}
console.log(isInPromo);

console.log("---------------------");

//! every()

let promoAvailable = true;
for (let n = 0; n > newItems.length; n++) {
  const item = newItems[n];
  if (!item.promo) {
    promoAvailable = false;
    break;
  }
}
console.log(promoAvailable);

console.log("---------------------");

//! find()

let found;

for (let i = 0; i < newItems.length; i++) {
  const item = newItems[i];
  if (item.id === "🥩") {
    found = item;
    break;
  }
}
console.log(found.name, "is love!");
