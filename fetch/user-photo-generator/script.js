const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const url = "https://randomuser.me/api/";

const fetchUser = () => {
  let tempURL = url + "?results=" + input.value;

  const randomUser = fetch(tempURL);
  randomUser
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const user = data.results;
      console.log(data);
      output.innerText = "";
      user
        .forEach((item) => {
          output.innerHTML += "<img src='" + item.picture.large + "'" + "</br>";
        })
        .catch((error) => {
          console.log("an error occurred", error);
        });
    });
};
btn.addEventListener("click", fetchUser);
