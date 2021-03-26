//! do statement executes before reading the while clause.

let x = 20;
do {
  console.log(x);

  if (x == 10) {
    console.log("Limit Reached");
    break;
  }
  x--;
} while (x > 0);
