let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 100;
while (j >= 1) {
  console.log(j);
  j--;
}

//example
let keyword = "pain";
let guess = prompt("Enter the keyword!");

while (guess !== keyword) {
  guess = prompt("Enter the keyword!");
}
console.log("Corret ");
