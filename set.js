//Set is a collection of elements. Set can only contains unique elements.

const languages = [
  "English",
  "Finnish",
  "English",
  "Bangla",
  "Tamil",
  "English",
  "Bangla",
];

const setOflanguages = new Set(languages);
console.log(setOflanguages);

//iterate elements
for (let x of setOflanguages) {
  console.log(x);
}
console.log("---------------------");

//Adding an element to a set

const names = new Set();

console.log(names.size);
names.add("Rakib");
names.add("Zakir");
names.add("Hakim");
names.add("Sakir");
names.add("Sakir2");
console.log(names.size);
console.log(names);
console.log(names.delete("Sakir2")); //delete element
console.log(names);

//Checking an element in the set

console.log(names.has("Rakib"));

//Clearing the set

names.clear();
console.log(names);
