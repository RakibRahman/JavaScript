const string = "hi";

const ps = string.padStart(3, "p");
const pe = string.padEnd(5, "d");
//? maximum length your padString is allowed to occupy minus what's being occupied by the string.
console.log(ps);
console.log(pe);

console.log("---------------------");

//! padStart()

console.log("ghajini".padStart(10));
console.log("ghajini".padStart(10, 0));

const convert = (num, targetLen) => {
  return num.toString().padStart(targetLen, 0);
};
console.log(convert(123, 5));

console.log("---------------------");
//! padEnd()

console.log("hi".padEnd(7, "Rakib"));

const str2 = "200";
console.log(str2.padEnd(5));

console.log("---------------------");

console.log("JavaScript".padStart(15));
console.log("HTML".padStart(15));
console.log("CSS".padStart(15));
console.log("React".padStart(15));
console.log("---------------------");

const purchase = [
  ["Masks", "9.99"],
  ["Shirt", "20.00"],
  ["Jacket", "200.00"],
  ["Gloves", "10.00"],
];
purchase.forEach(([item, price]) => {
  console.log(`${item}  ${price.padStart(30 - item.length)} `);
});

console.log("---------------------");

const id = "1612020049";
const lastDigits = id.slice(-4);
const masked = lastDigits.padStart(id.length, "*");
console.log(masked);

const maskEmail = (email, stars) => {
  const hideLetter = email.slice(stars);
  const obsecure = hideLetter.padStart(email.length, "*");
  return obsecure;
};
console.log(maskEmail("ashTalukder@gmail.com", 4));
console.log(maskEmail("ashTalukder@gmail.com", 2));
console.log(maskEmail("ashTalukder@gmail.com", 0));
