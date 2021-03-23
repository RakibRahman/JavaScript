/* 
! write a function which returns the sum of following series upto nth term(parameter)
? Series 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
*/
function seriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (i * 3 + 1);
  }
  return sum.toFixed(2);
}
console.log(seriesSum(2));

//! functional Programming
function seriesTotal(n) {
  return [...Array(n).keys()]
    .reduce((acc, value) => acc + 1 / (value * 3 + 1), 0)
    .toFixed(2);
}
console.log(seriesTotal(2));
