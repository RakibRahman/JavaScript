//! 1. concat()
//? Merge arrays
const names = ["rakib", "zakir", "ash"];
const numbers = [1, 2, 3, 4, 5];
const info = names.concat(numbers);
console.log(info); //[ 'rakib', 'zakir', 'ash', 1, 2, 3, 4, 5 ]

console.log("---------------------");

//! 2. copyWithin()
//? Copy and replace elements within the same array.
const id = [49, 50, 51, 52, 53];
const idCopy = id.copyWithin(0, 3, 4);
console.log(idCopy); //[ 52, 50, 51, 52, 53 ]

console.log("---------------------");

//! 3. every()
//? Returns true if each element of the array match the test in function,else returns false.
const fruitNames = ["Banana", "Orange", "Apple", "Mango"];
const allApples = fruitNames.every((apple) => apple === "Apple");
console.log(allApples); //false

console.log("---------------------");

//! 4. fill()
//? Fills all the elements of an array with the same value.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("berry")); //[ 'berry', 'berry', 'berry', 'berry' ]

console.log("---------------------");

//! 5. filter()
//? Used to extract or filter elements of given array based on a condition.
const fruitBasket = ["Banana", "Orange", "Apple", "Mango", "Apple", "🌽"];
const onlyApple = fruitBasket.filter((apple) => apple === "Apple");
console.log(onlyApple); //[ 'Apple', 'Apple' ]

console.log("---------------------");

//! 6. find()
//? Returns the element found in the array,otherwise returns undefined.
const corn = fruitBasket.find((fruit) => fruit === "🌽");
console.log(corn); // 🌽

console.log("---------------------");

//! 7. findIndex()
//?  Returns the index of an element found,otherwise -1 if not found.
const cornIndex = fruitBasket.findIndex((fruit) => fruit === "🌽");
console.log(cornIndex); //5

console.log("---------------------");

//! 8.forEach()
//? loops through each element of the array.
const cars = ["🚗", "🚓", "🚘", "🚖"];
cars.forEach((items) => console.log(items));
//🚗
//🚓
//🚘
//🚖

console.log("---------------------");

//! 9.map()
//? THid method iterate through all the elements in the array to carry out a specific task based on the provided function.
const age = [12, 14, 15, 16];
const double = age.map((ageDouble) => {
  return ageDouble * 2;
});
console.log(double); //[ 24, 28, 30, 32 ]

console.log("---------------------");

//! 10. reduce()
//? //reduce gives single output value of all array elements.
const total = age.reduce((accumulator, value) => accumulator + value);
console.log(total); //57

console.log("---------------------");

//! 11.join()
//?  Returns a new string by concatenating all of the elements in an array
const email = ["rr", ".", "talukder", "@", "gmail.com"];
console.log(email.join("")); //rr.talukder@gmail.com

console.log("---------------------");

//! 12. includes()
//? Checks if an element is available on the given array.It returns a Boolean value.
console.log(email.includes("rr")); //true
console.log(email.includes("..")); //false

console.log("---------------------");

//! 13. Some()
//? Returns true if at least one element of the array match the test in function,otherwise returns false.
const pets = ["dog", "cat", "bird", "snake"];
const checkPet = pets.some((animal) => animal === "snake");
console.log(checkPet); //true

console.log("---------------------");

//! 14. Reverse()
//? Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(pets.reverse()); //[ 'snake', 'bird', 'cat', 'dog' ]

console.log("---------------------");

//! 15. push()
//? add value to the end
const clouds = ["☁", "⛅", "🌤"];
clouds.push("🌨");
console.log(clouds); //[ '☁', '⛅', '🌤', '🌨' ]

//! 16. pop()
//? remove value from the end
clouds.pop();
console.log(clouds); //[ '☁', '⛅', '🌤' ]

console.log("---------------------");

//! 17. unshift()
//? add value from start
const arr = ["b", "c", "d", "e", "f"];
arr.unshift("a");
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//! 18. shift()
//? Remove value from the start
arr.shift();
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log("---------------------");

//! 19. slice()
//?Returns selected elements from array & can't add new elements.slice extracts up to but not including end.
const letters = ["a", "b", "c", "d", "e"];
const cut = letters.slice(0, 3);
console.log(cut); //[ 'a', 'b', 'c' ]

//! 20. splice()
//?Returns removed elements from array & can add new elements.
const alphabets = ["a", "b", "c", "d", "e"];
alphabets.splice(2, 1, "F"); // replaces 1 element at index 4
console.log(alphabets); //[ 'a', 'b', 'F', 'd', 'e' ]

console.log("---------------------");

//! 21. Sort()
//? It used to sort the array
const colors = ["red", "orange", "blue", "lime", "azure"];
console.log(colors.sort()); // [ 'azure', 'blue', 'lime', 'orange', 'red' ]

console.log("---------------------");

//! 22. flat()
//? removes empty slots in arrays.

const array = [[1, 2], [3, 4], 5];
console.log(array.flat()); //[ 1, 2, 3, 4, 5 ]
