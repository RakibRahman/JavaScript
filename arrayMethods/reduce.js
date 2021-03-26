const array = [10, 11, 5, 6, 78, 25];
const reduced = array.reduce((prev, next) => prev + next, 0);
console.log(reduced);

console.log("---------------------");

const arr = [1, 2, 3, 4, 5];
const iterations = arr.reduce((acc, value) => {
  console.log(acc, value);
  return acc + value;
}, 0);

console.log("---------------------");

const items = [
  { id: "🍔", name: "Super Burger", price: 150 },
  { id: "🥩", name: "Super Meat", price: 450 },
  { id: "🍜", name: "Super Noodles", price: 180 },
  { id: "🍕", name: "Pizza", price: 120 },
];

//! calculate total price of items

const totalPrice = items
  .map((item) => item.price)
  .reduce((acc, val) => acc + val);
console.log(totalPrice, "Tk");

//? another way
const total = items.reduce((acc, val) => acc + val.price, 0);
console.log(total);

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

const allItems = menu.reduce((total, items) => {
  console.log(total);
  console.log(items.price);
  total += items.price;
  return total;
}, 0);
console.log(allItems);
