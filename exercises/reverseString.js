//! Method 1: use array.reverse() method and string.join() method

//var name = "rakib";
const reverseString = (string) => [...string].reverse().join("");
console.log(reverseString("Rakib"));

//! Method 2 Reverse a String With a Decrementing For Loop

const reString = (str) => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
console.log(reString("healer"));

//! Method 3: Reverse a String With Recursion

function reverseString2(str) {
  if (str === "") return "";
  else return reverseString2(str.substr(1)) + str.charAt(0);

  //? The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
  //? The charAt() method returns the specified character from a string.
}
console.log(reverseString2("hello"));
