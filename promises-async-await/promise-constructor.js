const { rejects } = require("assert");
const { resolve } = require("path");

const test = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 2000);
    setTimeout(() => {
      reject("Promise is rejected");
    }, 1000);
  });
};
test()
  .then((data) => {
    console.log(data);
  })
  .catch((fail) => {
    console.log(fail);
  });
//! The function test returns a promise.
//! then and catch are consumers. .then is a function that runs when a promise is resolved. .catch is a function that runs when promise is rejected.
