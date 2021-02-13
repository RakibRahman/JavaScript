//Use the break statement to terminate a loop
let num = 0;
while (num < 15) {
  console.log(num);
  if (num == 6) {
    console.log("Break at 6");
    break;
  }
  num += 1;
}
//The continue statement can be used to restart a loop
//In contrast to the break statement, continue does not terminate the execution of the loop entirely.
//In a while loop, it jumps back to the condition.
// In a for loop, it jumps to the increment-expression.
let num2 = 0;
while (num2 < 5) {
  num2++;

  if (num2 > 3) {
    continue;
  }
  console.log(num2);
}
