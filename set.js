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
//Output: Set(4) { 'English', 'Finnish', 'Bangla', 'Tamil' }

//iterate elements
for (let items of setOflanguages) {
  console.log(items);
}
/*
Output:
English
Finnish
Bangla;
Tamil;
*/
console.log("---------------------");

//Adding an element to a set

const names = new Set();
console.log(names);
//output: Set(0) {}

console.log(names.size);
names.add("Rakib");
names.add("Zakir");
names.add("Hakim");
names.add("Sakir");
names.add("Sakir2");
console.log(names.size);
//output: 5
console.log(names);
console.log(names.delete("Sakir2"));
//Output: Set(4) { 'Rakib', 'Zakir', 'Hakim', 'Sakir' }
console.log(names);

//Checking an element in the set

console.log(names.has("Rakib"));
//Output: true
//Clearing the set

names.clear();
console.log(names);
//Output: Set(0) {}
