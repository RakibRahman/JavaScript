let colors = ["red", "orange", "blue", "lime", "azure"];
console.log(colors.sort());

const nums = [5, 4, 3, 2, 1, 6, 7, 9, 10, 8];
console.log(nums.sort((a, b) => a - b)); //The Compare Function
console.log(nums.sort((a, b) => b - a));

const points = [40, 100, 1, 5, 25, 10];
const random = points.sort((a, b) => 0.5 - Math.random());
console.log(random);

random.forEach((element) => {
  console.log(element);
});
