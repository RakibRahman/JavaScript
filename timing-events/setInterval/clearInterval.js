const myIntervalOne = setInterval(() => {
  console.log("I will be stopped soon.");
}, 500);

// Create timeout to stop the interval after 1 second
setTimeout(() => {
  clearInterval(myIntervalOne);
  console.log("excuted");
}, 1500);

const myInterval2 = setInterval(() => {
  // Log some message
  console.log("I will run once.");

  // Cancel the interval
  clearInterval(myInterval2);
  console.log("done");
}, 1000);
