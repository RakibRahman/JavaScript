let rightNumber = Math.floor(Math.random() * 10 + 1);
let guess = parseInt(prompt("Enter the keyword!"));

while (guess !== rightNumber) {
  if (guess > rightNumber) {
    //see output on console
    console.log(`${guess} is too high!`);
  } else {
    console.log(`${guess} is too low!`);
  }
  guess = parseInt(prompt("Please Guess Again"));
}
alert("Correct Guess");
