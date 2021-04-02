const submit = document.getElementById("submit");
const form = document.querySelector("form");

// const postInfo =
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents auto submit

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const id = document.getElementById("ID").value;

  const postUrl = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: title, body: body, userId: id }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  postUrl
    .then((response) => {
      return response.clone().json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.warn(err.message);
    });
});
