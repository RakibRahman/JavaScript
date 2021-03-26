//! The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

let cut = days.splice(1, 3);
let cuts = days.slice(1, 3);

console.log(cut);
console.log(cuts);
