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

console.log("---------------------");

//function with unlimited arguments

function addNames(...params) {
  console.log("Top rated players: ", params.length);
  console.log("Top rated players: ", params);
}
addNames("Rakib", "Zakir");
