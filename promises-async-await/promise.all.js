const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Rakib", "Zakir", "Ash", "Labib"]);
  }, 3000);
  setTimeout(() => {
    reject("No Data Received");
  }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Talukder", "Hossain", "Islam", "Amin"]);
  }, 3000);
  setTimeout(() => {
    reject("No Data Received");
  }, 5000);
});

// surnamesPromise
//   .then((get) => {
//     console.log(get);
//   })
//   .catch((fail) => {
//     console.log(fail);
//   });

// !Promise All
Promise.all([namesPromise, surnamesPromise])
  .then((data) => {
    const [names, surnames] = data;
    for (var i = 0; i < names.length; i++) {
      const name = names[i];
      const surname = surnames[i];
      console.log(`${name} ${surname}`);
    }
  })
  .catch((error) => {
    console.log(error);
  });
