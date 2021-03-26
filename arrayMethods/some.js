const greaterThanOne = [1, 2, 3, 4, 5].some((x) => x > 1);
const greaterThanSix = [1, 2, 3, 4, 5].some((x) => x > 6);
console.log(greaterThanOne);
console.log(greaterThanSix);

const items = [
  { id: "🍔", name: "Super Burger", price: 399, promo: false },
  { id: "🥩", name: "Super Meat", price: 199, promo: false },
  { id: "🍜", name: "Super Noodles", price: 299, promo: true },
];
const isInPromo = items.some((item) => item.promo);
console.log(isInPromo);

const total = isInPromo
  ? 600
  : items.reduce(prev, (next) => prev + next.price, 0);
console.log(total);
console.log(`Total: ${(total / 100).toFixed(2)}`);
