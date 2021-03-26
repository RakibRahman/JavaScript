function startGame() {
  let rightNumber = generateRandom();
  let guess = getInput();

  while (guess !== rightNumber) {
    if (guess > rightNumber) {
      //see output on console
      console.log(`${guess} is too high!`);
    } else {
      console.log(`${guess} is too low!`);
    }
    guess = getInput();
  }
  alert("Correct Guess");
}
function generateRandom() {
  return Math.floor(Math.random() * 10 + 1);
}
function getInput() {
  let guess = parseInt(prompt("Enter the number between 1 to 10:"));
  while (Number.isNaN(guess)) {
    let guess = parseInt(prompt("Plz Enter a valid number"));
  }
  return guess;
}

startGame();
