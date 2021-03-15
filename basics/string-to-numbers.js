var profits = "250" - "150";
var profits2 = "250" - "duck";
var result = "250" + 150; //! + concatenates two string
var result2 = "250" * 150; //! (-,*,/) will do the math
console.log(profits);
console.log(profits2);
console.log(result);
console.log(result2);

console.log("---------------------");
//?parseInt()
var currentAge = "20";
var maxAge = parseInt(currentAge) + 1; //! convert string to number,parseInt converts all strings.
console.log(maxAge);

console.log("---------------------");

var myInteger = "1.999";
console.log(parseInt(myInteger));
console.log(parseFloat(myInteger));

console.log("---------------------");

var strNum = "96";
var strNum0 = "9.6";
console.log(Number(strNum));
console.log(Number(strNum0));

console.log("---------------------");

//! convert number to string

var id = 250;
var idStr = id.toString();
console.log(idStr);

console.log("---------------------");

var price = 9.95;
var taxRate = 6.5;
var total = price + price * taxRate;
console.log(total);
console.log(total.toFixed(2)); //?control the length of decimals
console.log(total.toFixed()); //? no decimals

console.log("---------------------");

var number = 15.555;
//console.log(number.toFixed(2));
var numStr = number.toString();
if (numStr.charAt(numStr.length - 1) === "5") {
  numStr = numStr.slice(0, numStr.length - 1) + "6";
}
var numb = Number(numStr);
var newNum = numb.toFixed(2);
console.log(newNum);

var dim = "egg";
if (dim.charAt(dim.length - 1) === "g") {
  console.log("DIM");
} else {
  console.log("Dima");
}
