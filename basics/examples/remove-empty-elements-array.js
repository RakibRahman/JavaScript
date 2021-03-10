let list = ["Rakib", NaN, "Takib", undefined, "Wakib", null, "Headache"];

let newList = [];
for (let i in list) {
  if (list[i]) {
    newList.push(list[i]);
  }
}
console.log(newList);
