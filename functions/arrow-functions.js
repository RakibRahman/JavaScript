/* jshint esversion:6*/
//Usual Functions:
const hello = function () {
  const es6 = "ES6";
  return `Hello ${es6}`;
};

const powers = [1, 2, 3, 4, 5].map(function (number, index) {
  return Math.pow(number, index);
});

const add = function (n1, n2) {
  return n1 + n2;
};

const milesToKm = function (miles) {
  return miles * 1.60934;
};

console.log(hello());
console.log(powers);
console.log("Addition:", add(100, 100));
console.log("Miles to KM:", milesToKm(100));
console.log("-----------------------------------");

//Arrow function

const user = () => {
  const firstName = "Rakib";
  const lastName = "Talukder";
  return `Hello ${firstName} ${lastName}`;
};
console.log(user());

const sqr = [9, 18, 99, 33, 66].map((number, index) =>
  Math.round(Math.sqrt(number, index))
);
console.log(sqr);

const multiply = (n1, n2) => n1 * n2; //remove curly braces if there is only one return statement
console.log(multiply(20, 30));

const temp = (t) => {
  let f = t * 1.8 + 32;
  return f;
};
console.log("Celsius to Fahrenheit:", temp(50));
