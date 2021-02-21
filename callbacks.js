//Callback is function that gets executed on inside a function

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
