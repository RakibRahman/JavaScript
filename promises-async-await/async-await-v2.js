//! The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
//! Async functions can contain zero or more await expressions.

const { resolve } = require("path");

const one = () => {
  return "this is one";
};
const two = () => {
  //returns after 3 sec
  setTimeout(() => {
    return "this is two!";
  }, 3000);
};

const three = () => {
  return "this is three!";
};

function callAll() {
  let valOne = one();
  console.log(valOne);

  //will be undefined since it return after 3 sec and console.log()
  //  does not wait for that much long
  //!so we use async and await

  let valTwo = two();
  console.log(valTwo);

  let valThree = three();
  console.log(valThree);
}

callAll();

console.log("---------------------");

const one2 = () => {
  return "this is one";
};
const two2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("this is two!");
    }, 2000);
  });
};

const three2 = () => {
  return "this is three!";
};

async function callAll2() {
  let valOne2 = one2();
  console.log(valOne2);

  let valTwo2 = await two2();
  console.log(valTwo2);

  let valThree2 = three2();
  console.log(valThree2);
}

callAll2();
