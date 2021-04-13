class Animal {
  constructor(animal, name, age, breed) {
    console.log(`Name of the ${animal} is ${name}`);
    this.animal = animal;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  info() {
    console.log(`Age:${this.age} years old`);
    console.log(`Breed is: ${this.breed}`);
    console.log("-----------");
  }
}
const cat = new Animal("Cat", "Mike", 4, "Aegean");
cat.info();

const dog = new Animal("Dog", "Bobby", 6, "Poodle");
dog.info();

console.log("---------Inheritance------------");

class Tiger extends Animal {
  constructor(animal, name, age, breed, speed) {
    super(animal, name, age, breed);
    this.speed = speed;
  }
  speedInfo() {
    console.log(`${this.animal} Can run up to ${this.speed} Km/h`);
  }
}

const tiger = new Tiger("Tiger", "Killer", 11, "Bengal Tiger", 64);
tiger.info();
tiger.speedInfo();
