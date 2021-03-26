//Standard While loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("---------------------");

//Decremented Loop
let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}
console.log("---------------------");

let l = 0;
while (l <= 20) {
  console.log(l);
  l += 2;
}
console.log("---------------------");

//Break in while loop

let x = 0;
while (true) {
  console.log(x);
  if (10 == x) {
    break;
  }
  x++;
}
