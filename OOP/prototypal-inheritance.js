// prototypical inheritance refers to the ability to access object properties from another object.
let person = {
  greet: function () {
    return `${this.name} is cool`;
  },
};

let rakib = Object.create(person);
rakib.name = "rakib";
console.log(rakib.name);
console.log(rakib.greet());

let writer = Object.create(person);
writer.book = "Kill Me Heal Me";
console.log(writer.book);
