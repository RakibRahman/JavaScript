//! Prototypes are the mechanism by which JavaScript objects inherit features from one another.
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
Car.prototype.info = function () {
  return `${this.brand} ${this.year}`;
};
Car.prototype.speed = function (speed = "fast") {
  return `${this.info()} is ${speed}`;
};
let newCar = new Car("Toyota", 2020);
let newCar2 = new Car("Honda", 2300);
let newCar3 = new Car("BMW", 2100);

console.log(newCar2.info());
console.log(newCar.speed());
console.log(newCar3.speed("faster"));
