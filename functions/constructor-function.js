function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

console.log("---------------------");

function Person() {
  //define properties
  this.name = "Joker";
  this.age = 25;

  this.getName = function () {
    // "this" here refers to the "Person" constructor.
    // "this.name" is like "Person.name".
    return `Hello, my name is ${this.name}.`;
  };
}

//Create object with Person constructor

const personOne = new Person();
const personTwo = new Person();

console.log(personOne.name);
console.log(personOne.getName());

personOne.gender = "Male";
console.log(personOne.gender);
console.log(personTwo.gender); // gender only exists only on personOne

personTwo.height = 1.8;
console.log("Height:", personTwo.height);
console.log("Height:", personOne.height);

const personThree = new Person();

personThree.getAge = function () {
  return `Age: ${this.age}`;
};
console.log(personThree.getAge());

console.log("---------------------");

function Cat(name) {
  this.name = name;
}
const myCat = new Cat("Rob"); // {name: Rob}
console.log(myCat.name); //Rob
