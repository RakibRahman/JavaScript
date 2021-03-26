const { info } = require("console");
const fetch = require("node-fetch");

const getCurrencies = async () => {
  // Use fetch to get data from API
  // and assign it to a variable:
  const data = await fetch("https://api.exchangeratesapi.io/latest");

  // Convert the response to JSON
  // and assign it to a variable:
  const json = await data.json();

  console.log(json);
};
//getCurrencies();

//! Promise with async function:
//! Create function that returns a promise:
const promiseFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 2000);
  });
};

//?promiseFn().then((info) => console.log(info));

//! // Create async functions:

const asyncFn = async () => {
  console.log(await promiseFn());
};

asyncFn();
console.log("This will appear before the promise");
