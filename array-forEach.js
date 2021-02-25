const arrSparse = [2, 4, 5, 5, 9, 8, , 3];
let numCallbackRuns = 0;

arrSparse.forEach((element) => {
  console.log(element);
  numCallbackRuns++;
});
console.log("Callback Runs:", numCallbackRuns);
console.log("---------------------");

const names = ["Rakib", "Ash", "Zakir"];
const copyNames = [];

names.forEach((name) => {
  copyNames.push(name);
});
console.table(names);
console.log(copyNames);
