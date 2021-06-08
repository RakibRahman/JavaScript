//! Functions that are called with the new keyword are usually called constructor functions
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.status = function () {
    return `${this.brand} ${this.year}`;
  };
  //? do not `return` something on constructor function
}

let newCar = new Car("Toyota", 2020); // newCar is an instance of Car
let newCar2 = new Car("Honda", 2300);
let newCar3 = new Car("BMW", 2100);
console.log(newCar.status());
console.log(newCar2.status());
console.log(newCar3.status());
