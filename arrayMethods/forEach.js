const { info } = require("console");
const fetch = require("node-fetch");
const url = "https://randomuser.me/api/?results=1";

const fetchUsers = async () => {
  const users = await fetch(url);
  const randomUser = await users.json();
  randomUser.results.forEach((user) => {
    const { picture, name, gender, email, login } = user;
    const fName = name.first;
    const lName = name.last;
    const fullName = fName + " " + lName;

    console.log(fullName);
    console.log(gender);
    console.log(email);
  });

  return randomUser;
};
fetchUsers();
