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
console.log("---------------------");
const menu = [
  {
    name: "pancakes",
    category: "breakfast",
    price: 150,
  },
  {
    name: "steak",
    category: "lunch",
    price: 650,
  },
  {
    name: "eggs",
    category: "breakfast",
    price: 250,
  },
  {
    name: "rice",
    category: "dinner",
    price: 120,
  },
  { name: "pasta", category: "dinner", price: 180 },
  { name: "bacon", category: "lunch", price: 400 },
];
const under200 = menu.filter((item) => {
  if (item.price <= 200) {
    return item;
  }
  //? return item.price <200;
});
console.log(under200);

const categories = menu.filter((item) => item.category === "lunch");
console.log(categories);
