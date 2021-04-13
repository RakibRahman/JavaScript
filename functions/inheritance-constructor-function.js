const Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.dob = function () {
    console.log(this.name + " is born in " + (2021 - this.age));
  };
};

const ash = new Person("Fahmid", 26, "student");
console.log(ash.name);
ash.dob();

const zakir = new Person("zakir miya", 30, "developer");
zakir.dob();

console.log("=====Inheritance====");

const coder = function (name, age, job, position) {
  Person.call(name, age, job);
  this.position = position;
  this.info = function () {
    console.log("My name is: " + name);
    console.log("My position is: " + this.position);
  };
};

const ohi = new coder("Ohi Khan", 30, "web developer", "frontend");
ohi.info();
