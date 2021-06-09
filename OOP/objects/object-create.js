//! The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const aircraft = {
  flies: true,
};

const helicopter = Object.create(aircraft);

console.log(helicopter.flies);

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
