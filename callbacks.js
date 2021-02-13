//Callback is function that gets executed on inside a function

function callbackExample(name, callback) {
  console.log(callback(name));
}
callbackExample("Rakib", function (name) {
  return "Hello " + name;
});
