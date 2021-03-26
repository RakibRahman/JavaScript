const { rejects } = require("assert");
const { promises } = require("fs");
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

function validate(username) {
  let user = new Promise((resolve, reject) => {
    if (username == "pain") {
      setTimeout(() => {
        resolve("This World Shall Know Pain");
      }, 2000);
    } else {
      reject("Pain is gone");
    }
  });
  return user;
}
validate("pains")
  .then((shinra) => {
    console.log(shinra);
  })
  .catch((error) => {
    console.log(error);
  });
