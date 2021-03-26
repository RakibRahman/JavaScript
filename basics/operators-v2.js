//Comparison Operators
console.log("Comparison Operators:");
console.log("Hello" == "Hello");
console.log("Hello" == "Hlo");

console.log(10 == 10); //true
console.log(10 < 10); //false
console.log(10 <= 10); //true
console.log(10 > 10); //false
console.log(10 >= 10); //true
console.log("--------------");
console.log(10 != 10); //false
console.log(10 != 11); //true
console.log("--------------");

//Logical Operators
console.log("Logical Operators:");
console.log(5 == 5 && 55 == 55); //AND operator
console.log(5 == 5 && 55 != 55);

console.log("--------------");

console.log(5 == 5 || 55 == 55); //OR operator
console.log(5 == 5 || 55 != 55);
console.log(5 == 6 || 55 == 75);
console.log("--------------");

console.log(!(10 == 10)); //NOT operator
console.log(!(10 == 20));
