const names = ["Rakib", "Zakir", "Ash", "Ash", "Zakir"];
const outputArray = new Set(names);
console.log(outputArray);

//Set is a specific data structure that accepts only unique values.

const names2 = ["Rakib", "Zakir", "Ash", "Ash", "Zakir"];

const removeDuplicates = (array) => [...new Set(array)];

const unique = removeDuplicates(names2);
console.log(unique);

const uniqueNames = () => {
  console.log("\n");
  console.log(`All Names: ${names2} \n `);
  console.log("Unique Names: ");
  for (let x of unique) {
    console.log(x);
  }
};
uniqueNames();
