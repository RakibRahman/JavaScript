//! A weakset is just like normal Set but a WeakSet can only contain objects and its not iterable.
//!a WeakSet does not have a .clear() method
const uniqueFlavors = new WeakSet();
console.log(uniqueFlavors);
const flavor1 = { flavor: "chocolate" };
const flavor2 = { flavor: "candy" };
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);
