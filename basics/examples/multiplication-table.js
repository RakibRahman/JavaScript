// let series;

// let i = 1;
// let j = 1;

// for (i; i <= 10; i++) {
//   series = i + " = ";
//   for (j; j < 10; j++) {
//     series += i * j + " ";
//   }
//   console.log(series);
// }

var series;

for (var i = 1; i <= 10; i++) {
  series = i + " = ";
  for (var j = 1; j <= 10; j++) {
    series += i * j + " ";
  }
  console.log(series);
}

console.log("---------------------");

let num = 1;
let num2 = 9;
let result;
for (num; num <= 10; num++) {
  result = num2 * num;
  console.log(num2, " * ", num, " = ", result);
}
