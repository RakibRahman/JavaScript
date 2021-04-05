// Create timeout and assign it to a variable
const newTimeout = setTimeout(() => {
  console.log("I was supposed to run after 3 seconds.");
}, 3000);

console.log(newTimeout);

//Use clearTimeout() to cancel the "newTimeout" timeout
clearTimeout(newTimeout);
