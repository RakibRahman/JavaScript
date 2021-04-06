const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Data is available`);
  }, 3000);
  setTimeout(() => {
    reject(`Data is not available`);
  }, 2500);
});
getData
  .then((data) => {
    console.log("success", data);
  })
  .catch((err) => {
    console.log(err);
  });
