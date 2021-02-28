const { rejects } = require("assert");
const { resolve } = require("path");

let array = [1, 2, 3, 4, 5];
let promise = new Promise((resolve, reject) => {
  if (array.length > 3) {
    resolve(`length of array is ${array.length}`);
  } else {
    reject(`not enough length`);
  }
});
promise
  .then((info) => {
    return info;
  })
  .then((info2) => {
    console.log(info2);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("---------------------");
