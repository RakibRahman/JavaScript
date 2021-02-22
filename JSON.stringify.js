//A common use of JSON is to exchange data to/from a web server.
// ! When sending data to a web server, the data has to be a string
//Convert a JavaScript object into a string with JSON.stringify().

const obj = { name: "Zakir", age: 30, city: "Pabna" };
console.log(obj);

const newJSON = JSON.stringify(obj);
console.log(newJSON);

//Stringify a JavaScript Array
const arr = ["John", "Peter", "Sally", "Jane"];
const arrJSON = JSON.stringify(arr);
console.log(arrJSON);
