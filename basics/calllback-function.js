function callMe(name, callback) {
  let myAge = 20;
  callback(myAge);
  console.log("Is it working? " + name);
}
function hello(age) {
  console.log("my age is:" + age);
}
callMe("rakib", hello);
