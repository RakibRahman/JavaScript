//!The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

const names = ["zakir", "rakin", "Labib"];
const loopNames = names.keys();

for (const key of loopNames) {
  console.log(key + 1);
}
