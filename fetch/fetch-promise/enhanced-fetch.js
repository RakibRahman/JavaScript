const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const url = fetch("https://randomuser.me/api");

const fetchAPI = () => {
  url
    .then(
      (response) => {
        if (!response.ok) throw response.statusText;
        return response.clone().json();
      },
      (err) => {
        //! first level catch/interrupt
        //the fetch failing
        console.log("server error");
      }
    )
    .then(
      (data) => {
        console.log(data);
      },
      (err) => {
        //! failed to run response.json()
        console.log(" error");
      }
    )
    .catch((err) => {
      console.log("network error");
    });
};
btn.addEventListener("click", fetchAPI);
