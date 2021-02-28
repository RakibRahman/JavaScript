const { promises } = require("fs");

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
