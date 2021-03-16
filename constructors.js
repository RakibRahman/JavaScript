//? Constructors are the template which we can use to create more objects with similar properties.

function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
const person1 = new Person("Rakin", 4, "killer@kill");
const person2 = new Person("Fahmid", 8, "filler@fill");
console.log(person1);
console.log(person2);

class Individual {
  constructor(name, age, email) {
    console.log("Info Of Individual:");
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getName = () => {
    return `Hello ${this.name}`;
  };
}
const individual1 = new Individual("Sadika", 11, "sadika@gmail.com");
console.log(individual1);
console.log(individual1.getName());

class Developer extends Individual {
  constructor(name, age, email, position) {
    super(name, age, email);
    this.position = position;
  }
  getInfo = () => {
    console.log(`Hello I'm ${this.name}`);
    console.log(`Hello I'm ${this.age} years old`);
  };
  job() {
    console.log(`Current position: ${this.position}`);
  }
}
const developerFront = new Developer(
  "Labib",
  13,
  "email",
  "Front End Developer"
);
developerFront.getInfo();
developerFront.job();
