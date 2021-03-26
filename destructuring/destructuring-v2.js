//Array Destructuring

const flowers = ["🌹", "🌷", "🌻", "🌼"];

const [rose, tulip, sunflower] = flowers;
console.log(rose);
console.log(tulip);

const [, , , blossom] = flowers;
console.log(blossom);

console.log("---------------------");

//Object Destructuring

const userInfo = {
  name: "rakib",
  age: 24,
};

const { name, age } = userInfo;
console.log(name.toUpperCase());

console.log("---------------------");

//Nested Destructuring

const person = {
  name: "rakib",
  age: 24,
  work: {
    position: "Front End Dev.",
    company: "Bekar",
  },
};
const {
  name: nickName,
  work: { position, company },
} = person;
console.log(`${nickName} works at ${company} as a ${position}`);

console.log("---------------------");

//Advance Destructuring

const developer = {
  givenName: "Rakib",
  skills: ["JS", "HTML", "CSS"],
  myFlowers: {
    rosee: "🌹",
    tulipp: "🌷",
    blossoom: "🌼",
  },
};
const {
  myFlowers: { tulipp },
  skills: [js, html],
} = developer;
console.log(tulipp, js, html);

const {
  givenName,
  myFlowers: { rosee: golap, tulipp: ttt },
} = developer;
console.log(givenName, golap, ttt);
