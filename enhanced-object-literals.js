//usual way to pass variables in ES5
function getName(name, age, year) {
  return {
    Name: name,
    Age: age,
    Year: year,
  };
}
console.log(getName("Rakib", 25, 1996));
// in the above function, the object that is being returned is created using object literals.

//ES6 removes all of that repetition
function getCars(make, model, year) {
  return {
    make,
    model,
    year,
    sayModel() {
      return model;
    },
  };
  //Note that if no variable has the same name as the property key defined, we'll get an error
}
console.log(getCars("Zetsu", "25CV", 2021));
console.log(getCars("Apple", "MacBook", "2015").sayModel());

console.log("*************************");

const person = (name) => {
  return {
    name,
  };
};
const info = person("Rakib");
console.log(info.name);
// console.log(person.("Rakib"));
