function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return `${this.name} is  ${this.age} years old`;
};
const rahim = new Person("Fahmid", 21);
console.log(rahim.greet());

function Racer(name, age, car) {
  Person.call(this, name, age);
  this.car = car;
}

Racer.prototype = Object.create(Person.prototype); //get methods of Person {important}
Racer.prototype.info = function () {
  return `${this.name} is a celebrity`;
};

const racerOne = new Racer("Pain", 25, "BMW");
console.log(racerOne.age);
console.log(racerOne.greet());

console.log(racerOne.info());

function Player(name, age, type) {
  Racer.call(this, name, age);
  this.type = type;
}
Player.prototype = Object.create(Racer.prototype);
const labib = new Player("labib", 10, "Cricketer");
console.log(labib.type);
console.log(labib.greet());

console.log(labib.constructor); // will indicate to Person
Player.prototype.constructor = Player; // will indicate to Player {important}
console.log(labib.constructor);
