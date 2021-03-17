const array = [true, false, true, true, false];
console.log(array.filter(Boolean));

console.log("---------------------");

const items = [
  { id: "🍔", name: "Super Burger", price: 150 },
  { id: "🥩", name: "Super Meat", price: 450 },
  { id: "🍜", name: "Super Noodles", price: 180 },
  { id: "🍕", name: "Pizza", price: 120 },
];
//! compare each items price property

const lessExpensiveItems = items.filter((item) => item.price <= 150);
console.log(lessExpensiveItems);
console.log("---------------------");

console.log(
  `Less Expensive Items: ${lessExpensiveItems
    .map((item) => item.name)
    .join(", ")}`
);
