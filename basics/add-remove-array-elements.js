//! add element to end
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);

//! remove element from end
arr1.pop();
console.log(arr1);

console.log("---------------------");

//! remove element from start

arr2 = ["rakib", "sakib", "jakir", "ohi", "killer"];
arr2.shift();
console.log(arr2);

//! add element to start

arr2.unshift("rakib");
console.log(arr2);

console.log("---------------------");

//! get index of element

console.log(arr2.indexOf("ohi"));

//! remove elements with splice()

arr3 = ["hacker", "worker", "killer", "player"];
arr3.splice(1, 2);
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3);
console.log(arr4.splice(3));
