console.log("---------------------");

let letters = ["a", "b", "c", "d", "e"];
let check = "f";
let matchFound = false;
for (let c = 0; c <= 4; c++) {
  if (check === letters[c]) {
    matchFound = true;
    console.log("its available");
    break;
  }
  if (matchFound === false) {
    console.log("its not available");
    break;
  }
}

console.log("---------------------");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = numbers.length; //!if number of elements of array is unknown
let found = false;
let chk = 1;

for (let w = 0; w < length; w++) {
  if (chk === numbers[w]) {
    found = true;
    console.log("its available");
    break;
  }
  if (found === false) {
    console.log("its not available");
    break;
  }
}
console.log("---------------------");

let firstNames = ["Rakib", "Zakir", "Sakir", "Ohi", "Akir"];
let lastNames = ["Terminator", "Chitti", "DoomGuy", "Master"];
let fullNames = [];
for (let i = 0; i < firstNames.length; i++) {
  for (let j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + " " + lastNames[j]);
    console.log(fullNames);
  }
}
