//! The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const largeNum = (num) => num > 11;
console.log(arr.findIndex(largeNum));
