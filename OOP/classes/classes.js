class Person {
  // *define properties in constructor
  constructor(name, surname, gender, age, aim) {
    console.log(`${name} is from ${surname.toUpperCase()} family`);
    // !constructor gets invoked only once
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.age = age;
    this.aim = aim;
  }
  // method
  info() {
    console.log(`Gender is ${this.gender} & ${this.age} year old`);
  }
  target() {
    console.log(`Aim in Life: to be a ${this.aim}`);
  }
}
const rakib = new Person(
  "Rakib",
  "Talukder",
  "Male",
  25,
  "Front-End Developer"
);
rakib.info();
rakib.target();

console.log("---------------------");

const zakir = new Person(
  "Zakir",
  "Hossain",
  "Male",
  28,
  "Full Stack Developer"
);
zakir.info();
zakir.target();
