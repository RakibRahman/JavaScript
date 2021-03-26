const { info } = require("console");
const fetch = require("node-fetch");

const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  //   console.log(fetchRandomUsers);
  fetchRandomUsers.then((data) => {
    data.json().then((randomUsers) => {
      //console.log(JSON.stringify(randomUsers));
      console.log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach((user) => {
        const { name, gender, email } = user;
        console.log(`${JSON.stringify(name)} - ${gender} - ${email}`);
      });
    });
  });
};
getRandomUsers(1);
