const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const getInput = () => {
  const randomUser = new XMLHttpRequest();
  const url = "https://randomuser.me/api/";

  let tempURL = url + "?results=" + input.value;

  randomUser.onload = () => {
    if (randomUser.readyState === 4 && randomUser.status === 200) {
      let data = JSON.parse(randomUser.responseText).results;
      //   console.log(data);

      output.innerHTML = "";
      //? iterate over data

      for (let i = 0; i < data.length; i++) {
        output.innerHTML +=
          data[i].name.first + ": " + data[i].email + " " + "</br>";
      }
    } else {
      console.log("an error occurred");
    }
  };

  randomUser.open("GET", tempURL);
  randomUser.send();
  console.log(input.value);
};

btn.addEventListener("click", getInput);
