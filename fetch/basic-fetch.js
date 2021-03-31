const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const url = "https://randomuser.me/api/";

const fetchUser = () => {
  const randomUser = fetch(url);
  randomUser
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
    });
};
btn.addEventListener("click", fetchUser);
