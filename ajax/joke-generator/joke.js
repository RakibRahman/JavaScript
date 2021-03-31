const output = document.getElementById("output");
const btn = document.getElementById("btn");

const fetchJokes = () => {
  let jokes = new XMLHttpRequest();
  let url = "https://api.chucknorris.io/jokes/random";
  jokes.open("GET", url, true);
  jokes.send();
  jokes.onreadystatechange = () => {
    if (jokes.readyState === 4) {
      if (jokes.status === 200) {
        let joke = jokes.responseText;
        let getJoke = JSON.parse(joke);

        output.innerHTML =
          "<img src='" + getJoke.icon_url + "'></br>" + getJoke.value;
        btn.innerText = "Another joke plz";
      } else {
        output.innerHTML = "An error occurred";
      }
    }
  };
};

btn.addEventListener("click", fetchJokes);
