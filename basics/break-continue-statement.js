for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
console.log("---------------------");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log(i, "is skipped");

    continue;
  }
  console.log("i is now at:", i);
}
