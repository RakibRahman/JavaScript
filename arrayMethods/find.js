const found = ["a", "b", "c", "d"].find((x) => x === "a");
const notFound = ["a", "b", "c", "d"].find((x) => x === "e");
console.log(found);
console.log(notFound);

const items = [
  { id: "🍔", name: "Super Burger", price: 150 },
  { id: "🥩", name: "Super Meat", price: 450 },
  { id: "🍜", name: "Super Noodles", price: 180 },
  { id: "🍕", name: "Pizza", price: 120 },
];
const favorite = items.find((item) => item.id === "🥩");
console.log(
  `My favourite item is ${favorite.name} which is ${(
    favorite.price / 2
  ).toFixed(2)} Tk`
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

const rice = menu.find((item) => item.name === "rice");
console.log(rice);
