//! The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries);
console.log(map);
console.log(map.size);

//add element to  map
map.set("london", "uk");
map.set("usa", "america");
console.log(map);

console.log("---------------------");

//Getting a value from Map
console.log(map.get("london"));

//Checking key in Map
console.log(map.has("uk"));
console.log(map.has("london"));

console.log("---------------------");

//Getting all values from map using loop
for (const [country, city] of map) {
  console.log(country, city);
}
