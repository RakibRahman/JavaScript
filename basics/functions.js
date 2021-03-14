function getName(name = "Unknown") {
  console.log("Hello " + name);
}
getName("Rakib");
getName();

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

console.log(isEven(12));
console.log(isEven(91));
