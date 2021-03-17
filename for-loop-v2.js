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

const expensiveItems = [];
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (item.price > 160) {
    expensiveItems.push(item);
  }
}
console.log(expensiveItems);
