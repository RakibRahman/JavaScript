//! ex1
function closureDemo() {
  let x = 10;
  function anotherFn() {
    let y = 10;
    console.log(`Sum of x & y: ` + (x + y));
  }
  return anotherFn();
}
closureDemo();

//! ex2
function total(a) {
  return function (b) {
    console.log("Total:", a + b);
  };
}
total(2)(2);
