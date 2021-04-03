/*
! The try statement lets you test a block of code for errors.

! The catch statement lets you handle the error.

! The throw statement lets you create custom errors.
 */
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

try {
  values.forEach((item, index) => {
    if (item > 5) {
      throw new Exception("Limit exceeded");
    }

    console.log(`At ${index + 1} is number ${item}`);
  });
} catch (err) {
  console.log("Loop is done");
}
