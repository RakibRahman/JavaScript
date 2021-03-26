const firstName = "RaKib";
const lastName = "Rahman";

console.log(firstName, lastName);
console.log(firstName[3]);
console.log(firstName.length);

let quote = "Kill Me Heal Me";
console.log(quote.length); //counts space as well

//String Methods

//Changing Case
let kmhm = quote.toUpperCase();
console.log(kmhm);
console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

//trim
let hii = " Hello World  j s  ";
console.log(hii);
console.log(hii.trim());

//slice

let str = "thisWorldShallKnowPain";
console.log(str.slice(0, 4));
console.log(str.slice(4));

//Replace
let hello = "hello are you ok ok";
console.log(hello.replace("ok", "okay")); //will replace only first word

//Repeat
let pain = "Pain";
console.log(pain.repeat(6));

//String Template Literals
let count = `I counted ${3 + 3} apples`;
console.log(count);

let userName = "Rakib";
let welcome = `welcome Back,${userName}`;
console.log(welcome);

//String.indexOf()

const shinra = "Know Pain. Accept Pain. Feel Pain";

const word = "Pain";
const indexOfFirst = shinra.indexOf(word);

console.log(
  `The Index of the first "${word}" from the beginning is ${indexOfFirst}`
);
console.log(
  `The index of the 2nd "${word}" is ${shinra.indexOf(word, indexOfFirst + 1)}`
);

const strE = "Know Pain. Accept Pain. Feel Pain. Heal Pain";
let num = 0;
let position = strE.indexOf("Pain");

while (position !== -1) {
  num++;
  position = strE.indexOf("Pain", position + 1);
}
console.log(num);
