//! EX1
function createGrid([width = 6, height = 5]) {
  return `Generates ${width} x ${height}  grid`;
}
console.log(createGrid([]));
console.log(createGrid([11, 54]));
console.log(createGrid([2]));
//!createGrid(); // throws an error

//! EX2
function randomUser([num = 6, id = "random"] = []) {
  return `Generated ${num} - ${id} users`;
}
console.log(randomUser());
console.log(randomUser([9, "kill"]));

console.log("---------------------");

function houseDescriptor([houseColor = "green", shutterColors = ["red"]] = []) {
  return `I have a ${houseColor} house with ${shutterColors.join(
    " and "
  )} shutters`;
}
console.log(houseDescriptor(["green"]));
console.log(houseDescriptor(["yellow", ["green", "white", "purple"]]));

console.log("---------------------");

function createCandy({ scoops = 1, toppings = ["Dark Chocolate"] } = {}) {
  const scoopText = scoops === 1 ? "scoop" : "scoops";
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(
    " and "
  )} Toppings`;
}
console.log(createCandy());
console.log(createCandy({}));
console.log(createCandy({ scoops: 2 }));
console.log(createCandy({ scoops: 6, toppings: ["Cherry", "Cookie"] }));

console.log("---------------------");

function buildHouse({ floors = 1, color = "red", walls = "brick" } = {}) {
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}
buildHouse();
console.log(buildHouse());
console.log(buildHouse({}));
console.log(buildHouse({ floors: 3, color: "yellow" }));
//! object defaults with object destructuring is recommended
