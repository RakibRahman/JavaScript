function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `${this.name} is  ${this.age} years old`;
};

function Racer(name, age, car) {
  Person.call(this, name, age);
  this.car = car;
}

Racer.prototype = Object.create(Person.prototype);
Racer.prototype.greet = function () {
  return `${Person.prototype.greet.call(this)} . He is a celebrity`;
  //method overriding
};

const racerOne = new Racer("Pain", 25, "BMW");
console.log(racerOne.age);
console.log(racerOne.greet());
