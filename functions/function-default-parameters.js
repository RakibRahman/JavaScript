const pay = (salary, bonus = " TK") => salary + bonus;

console.log(pay(213));

console.log("---------------------");

const info = (
  name,
  details = {
    age: 25,
    month: "october",
  }
) => {
  return `${name.toUpperCase()} ${details.age} ${details.month}`;
};
console.log(info("rakib"));
console.log(info("danny", { age: 29, month: "August" }));
console.log(info("josh", { age: 19, month: "June" }));
