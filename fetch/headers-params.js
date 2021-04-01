const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const url = "https://randomuser.me/api/";

const fetchUser = () => {
  let params = new Request(url, {
    method: "GET",
    mode: "cors",
    headers: new Headers(),
    cache: "default",
  });

  const randomUser = fetch(params);
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
