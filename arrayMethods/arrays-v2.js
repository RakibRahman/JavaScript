const names = ["Zakir", "Pain", "Ash"];
console.log(names);
console.log(names[2]);
names.push("Ohi");
console.log(names);

//array values using for loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//array values using for of loop
for (let i of names) {
  console.log(i);
}

//array values using for each loop
names.forEach(function (n, index) {
  console.log(index + "-" + n);
});
