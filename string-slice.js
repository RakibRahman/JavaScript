//! Extracting string elements
const fruits = "Apple,Berry,Banana";
console.log(fruits);
console.log(fruits.slice(0, 4));
console.log(fruits.slice(0, 5));
//slice does not include given end argument

console.log(fruits.slice(6, -3));
console.log(fruits.slice(0));
const myStatus =
  "Nunc nec arcu et eros consequat dapibus. Aliquam eu mauris hendrerit, scelerisque nisi ut, vestibulum felis. Proin fringilla ante a lorem ultricies lacinia. In finibus justo turpis, non aliquet tortor porttitor semper. Maecenas gravida, quam nec ornare vulputate, nisi augue mollis dui, ac cursus est dui eu lacus. ";

const short = myStatus.slice(0, 200);

console.log(myStatus.length);
console.log(short.length);
