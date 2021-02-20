let promise = new Promise((resolve, reject) => {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("Task Failed Successfully"), 1000);
});
promise.then((get) => {
  console.log(get);
});

console.log("---------------------");

const asyncCall = new Promise((resolve, reject) => {
  // Wait 1s and show output
  setTimeout(() => {
    resolve("Hello Promise");
  }, 1000);
  setTimeout(function () {
    // pretend we got something wrong.
    reject("error");
  }, 1500);
});
asyncCall
  .then((data) => {
    console.log(data);
  })
  .catch((fail) => {
    console.log(fail);
  });

console.log("---------------------");
