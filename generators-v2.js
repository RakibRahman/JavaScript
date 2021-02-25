function* iterableObj() {
  yield "Md.";
  yield "Rakibur";
  yield "Rahman";
  yield "Talukder";
}
for (let x of iterableObj()) {
  console.log(x);
}

console.log("---------------------");

//to create generators that never end

function* numbers() {
  let num = 1;
  while (true) {
    yield num;
    num++;
  }
}
const result = numbers();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);

//Lazy Evaluation
//? Lazy Evaluation is an evaluation model which delays the evaluation of an expression until its value is needed. That is, if we don’t need the value, it won’t exist.
console.log("---------------------");

function* powerSeries(number, power) {
  let base = number;
  while (true) {
    yield Math.pow(base, power);
    base++;
  }
}
const powerOf2 = powerSeries(1, 2);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
console.log(powerOf2.next().value);
