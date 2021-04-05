//! Memoization is an optimization technique used to speed up programs by storing the results of function calls and returning the cached result when the same inputs occur again.

const memoizedSum = () => {
  let cached = {};

  return (n) => {
    if (n in cached) {
      console.log("Fetching from the cache");
      return cache[n];
    } else {
      console.log("...Calculating");
      const result = n + 1;
      cached[n] = result;
      return result;
    }
  };
};
const sum = memoizedSum();
console.log(sum(10));
