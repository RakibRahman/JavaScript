//Callback is function that gets executed on inside a function
//! A callback function is a function passed to another function as an argument.

function callbackExample(name, callback) {
  console.log(callback(name));
}
callbackExample("Rakib", function (name) {
  return "Hello " + name;
});
console.log("---------------------");

setTimeout(function () {
  console.log("inside timer");
}, 1000);

const outer = (callbackFn) => {
  console.log("Outer Function");
  callbackFn();
};

outer(function inner() {
  console.log("Inner Callback Function");
});

console.log("---------------------");

function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}
function isPositive(n) {
  return n > 0;
}
each([-2, 7, 11, -4, -10], isPositive);
