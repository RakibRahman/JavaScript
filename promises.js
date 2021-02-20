const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data back from server");
  }, 3000);
  setTimeout(() => {
    reject("No data found from the server,an error happened");
  }, 4000);
});
promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("---------------------");
const data = new Promise((received, failed) => {
  setTimeout(() => {
    received("All Data Received");
  }, 5000);
  setTimeout(() => {
    failed("Data is not received");
  }, 3000);
});
data
  .then((getData) => {
    console.log(getData);
  })
  .catch((fail) => {
    console.log(fail);
  });
