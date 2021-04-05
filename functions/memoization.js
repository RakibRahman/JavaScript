//! Memoization is an optimization technique used to speed up programs by storing the results of function calls and returning the cached result when the same inputs occur again.

const memoizedSum = () => {
  let cached = {};

  return (n) => {
    if (n in cached) {
      console.log("Fetching from the cache");
      return cached[n];
    } else {
      console.log("...Calculating");
      const result = n + n;
      cached[n] = result;
      return result;
    }
  };
};
const sum = memoizedSum();
console.log(sum(10));
console.log(sum(5));
console.log(sum(10));
console.log(sum(5));

console.log("---------------------");

const mem = () => {
  let cache = {};

  return (x, y) => {
    if (x * y in cache) {
      console.log("Result from the catch");
      return cache[x * y];
    } else {
      console.log("Fresh Result....");
      let result = x * y;
      cache[x * y] = result;
      return result;
    }
  };
};

const multiply = mem();
console.log(multiply(10, 2));
console.log(multiply(10, 2));
console.log(multiply(10, 20));
console.log(multiply(10, 20));
