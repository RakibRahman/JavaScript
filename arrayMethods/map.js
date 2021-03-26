const items = [
  { id: "🍔", name: "Super Burger", price: 150 },
  { id: "🥩", name: "Super Meat", price: 450 },
  { id: "🍜", name: "Super Noodles", price: 180 },
];
//! update the price

const halfPrice = items.map((item) => {
  if (item.id === "🥩") {
    return {
      ...item,
      price: item.price / 2,
      //? using spread operator to return a new object ,instead of mutating the existing object.
    };
  }
  return item;
});
console.log(halfPrice);

console.log("---------------------");

const newItems = items.map((item) => {
  return {
    foodName: item.name.toUpperCase(),
    foodPrice: item.price * 10,
  };
});
console.log(newItems);
