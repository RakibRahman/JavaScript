//Arrow Function ⇒ No Params, Single line function
const hi = () => {
  console.log("Learning Javascript");
};

hi();

const hello = () => console.log("Arrow function is awesome");
hello();
console.log("---------------------");

//Arrow Function ⇒ Single Param, Single line function.{} not needed
const person = (name) => console.log(`Hello, ${name}`);
person("Rakib");
console.log("---------------------");

//Arrow Function ⇒ Single Param, Multiple lines function,{} needed
const person2 = (name) => {
  console.log(`Hello, ${name}`);
  console.log("Keep Coding");
};
person2("Rakib");

console.log("---------------------");

//Arrow Function ⇒ Multiple Params, Single & Multiple lines function
const greeting = (name, membershipType) =>
  console.log(`Greeting: Hi ${name}, Are you ${membershipType} member?`);

greeting("Rakib", "Special Edition");

console.log("---------------------");

//Multiple Params with multiple lines
const greeting2 = (name, membershipType) => {
  const memberGreeting = `Greeting: Hi ${name}, Are you ${membershipType} member?`;
  console.log(memberGreeting);
};

greeting2("Rakib", "Special Edition");

console.log("---------------------");

//implicit return.
//Notice that the 'return' statement is completely omitted and the string value 'Mango' is returned when the function getFruitName() is invoked. This is known as an implicit return.
const getFruitName = () => "Mango";

console.log(getFruitName());

console.log("---------------------");
