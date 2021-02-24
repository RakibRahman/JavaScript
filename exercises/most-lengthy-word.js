const fruits = ["Apple", "Pine-apple", "Banana", "Jack-fruit"];

let longWord = "";

fruits.forEach((word) => {
  //console.log(word);
  if (word.length > longWord.length) {
    longWord = word;
  }
});
console.log(`Most long word is: ${longWord}`);
