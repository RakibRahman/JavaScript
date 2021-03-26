let key1 = ["one", "two", "three"];
let key2 = ["I", "II", "III"];
let value = ["A", "B", "C"];

let arr = {};

for (let i = 0; i < 3; i++) {
  arr[key1[i]] = {};
  arr[key1[i]][key2[i]] = value[i];
}
console.log(arr["one"]["I"]);
console.log(arr["two"]["II"]);
console.log(arr["three"]["III"]);
console.log("---------------------");

//For of
for (let x of key2) {
  console.log(x);
}
//forEach
["Rakib", "Shuvo", "Shuvasish", "Zakir"].forEach((names, index) =>
  console.log(`${index + 1} ${names}`)
);
