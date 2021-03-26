const cart = [
  {
    title: "Samsung",
    price: 646.25,
    amount: 1,
  },
  {
    title: "Nokia",
    price: 800,
    amount: 2,
  },
  {
    title: "Apple",
    price: 1111.99,
    amount: 2,
  },
  {
    title: "Walton",
    price: 646.25,
    amount: 3,
  },
];
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    //!count items in cart
    total.totalItems += amount;
    //! count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = cartTotal.toFixed(2);
console.log(totalItems, cartTotal);
