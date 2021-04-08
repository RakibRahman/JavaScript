function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function demo() {
  console.log("This World");
  await sleep(500);
  console.log("Shall Know");
  await sleep(1000);
  console.log("Pain");
}
demo();
async function test() {
  //   const result = await demo();
  console.log("Are you a robot?");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("Welcome");
}
test();
