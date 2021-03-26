const greaterThanOne = [1, 2, 3, 4, 5].every((x) => x < 10);
const greaterThanSix = [1, 2, 3, 4, 5, 8].every((x) => x < 6);
console.log(greaterThanOne);
console.log(greaterThanSix);
const items = [
  { id: "🍔", name: "Super Burger", price: 399, stock: true },
  { id: "🥩", name: "Super Meat", price: 199, stock: true },
  { id: "🍜", name: "Super Noodles", price: 299, stock: false },
];
const isInStock = items.every((x) => x.stock);
console.log(isInStock);

if (!isInStock) {
  console.log(`Sorry, ${items.find((item) => !item.stock).id} is not in stock`);
}
