const test = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 2000);
  });
};
const first = async () => {
  console.log("before promise");
  let valTwo = await test();
  console.log(valTwo);

  console.log("After Promise");
};

const second = () => console.log("in function second");

first();
second();

/*
When ever you go through await keyword in an async function , javascript leaves the function and executes the remaining part of the code. Whenever the promise is returned then it continues to execute the remaining part of the previous function. As you can see that the second() function gets executed while the first is being executing.
*/
