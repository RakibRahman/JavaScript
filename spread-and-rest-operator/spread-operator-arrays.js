const array1 = ["yasin", "Rakin", "labib", "Luffy"];
const array2 = ["Kill", "Me", "Heal", "Me"];

const concatArray = [...array1, ...array2];

concatArray.forEach(function (nameList) {
  console.log(nameList);
});

const surname = "Talukder";
const surnameToArray = [...surname];

surnameToArray.forEach(function (letters) {
  console.log(letters.toLocaleUpperCase());
});

const mathNumbers = function (x, y, z, m) {
  return (x + y + z) / m;
};
//console.log(addNumbers(1, 1, 1));

const numbers = [10, 10, 10, 3];

const mathResult = mathNumbers(...numbers);
console.log(mathResult);

//add new item

let arr3 = [1, 2, 4, 5];
console.log(arr3);

let newNumber = 96;
arr3 = [...arr3, newNumber];
console.log(arr3);
