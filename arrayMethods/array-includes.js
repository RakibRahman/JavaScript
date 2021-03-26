//Includes()
//! This method will return true if the array contains a certain element, and false if not.
const num = [1, 2, 3, 4, 5];

const result = (x) => {
  if (num.includes(x)) {
    return `${true} || ${x} is a member of num array`;
  } else {
    return `${false} || ${x} is not a member of num array`;
  }
};
console.log(result(3));
console.log(result(9));
