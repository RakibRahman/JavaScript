const names = ["Anna", "Mariam", "Joe", "Mark", "Matt"];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, , joe, ...restNames] = names;

console.log(`${anna}  ${joe}`);
console.log(restNames);
console.log(restNames.length);

console.log("-------============---------");

let fruits = ["Apple", "Backberry", "Mango", "Strawberry"];

let [apple, bb, mango, str] = fruits;
console.log(apple);
console.log(bb, str);

let friends = ["Zakir", "Ohi", "Ash", "Shuvasish"];
const [z, o, a, s] = friends;
//The comma separator is used to skip values in an array
const [, ohi, ash] = friends;
console.log(`${ohi},${ash} are my best friends`);
//console.log(`${z},${o},${a},${s} are my dear friends `);

let [, pronoun, , name] = ["Hello", "I", "am", "Rakib"];
console.log(pronoun);
console.log(name);

console.log("-------============---------");

let [hi, ...intro] = ["Hello", "I", "am", "Rakib"];
console.log(hi);
console.log(intro);

//Destructuring Assignment with Functions

function getArray() {
  return ["LG", "Samsung", "Nokia", "Oppo"];
}
const [lg, sam, ...no] = getArray();
console.log(lg);
console.log(sam);
console.log(no);

// Swapping Values

var n1 = 5;
var n2 = 6;
console.log("before swap: ", n1, n2);
[n1, n2] = [n2, n1];
console.log("after swap: ", n1, n2);

let fire = "🔥";
let fruit = "🍉";

[fruit, fire] = [fire, fruit];
console.log(fire, fruit);
