const fetch = require("node-fetch");

const { promises } = require("fs");
const { resolve } = require("path");

async function logName(name) {
  console.log(name);
  //! 1.we can yield promises using await
  const upName = new Promise((res, rej) => {
    setTimeout(() => {
      res(name.toUpperCase());
    }, 2000);
  });
  const result = await upName;

  // this function returns a promise

  return result;
}
logName("Rakib").then((res) => {
  console.log(`result from async function: ${res}`);
});

console.log("---------------------");

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("Calling");

  const result = await resolveAfter2Seconds();
  console.log(result);
}
asyncCall();
