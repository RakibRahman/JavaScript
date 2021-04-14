class Dessert {
  constructor(calories = 250) {
    console.log(`${calories}`);
    this.calories = calories;
  }
}

class IceCream extends Dessert {
  constructor(flavor, calories, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const item = new IceCream("cold", 320, ["hot"]);
console.log(item);
