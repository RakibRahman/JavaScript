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
