const output = document.getElementById("output");
const getNum = document.getElementById("postNum");
const btn = document.getElementById("btn");
const refresh = document.getElementById("refresh");

console.log(getNum);
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts");

const getPosts = () => {
  fetchPost
    .then((response) => {
      return response.clone().json();
    })
    .then((data) => {
      let limit = getNum.value;

      console.log(data);

      data = data.splice(0, limit);
      console.log(data);
      data.forEach((item) => {
        let title = `<h3>${item.title}</h3>`;
        let para = `<p>${item.body}</p>`;
        output.innerHTML += title + para;
      });
    })
    .catch((err) => {
      console.warn(err.message);
    });
  refresh.style.display = "initial";
};
btn.addEventListener("click", getPosts);

function reload() {
  reload = location.reload();
}
refresh.addEventListener("click", reload, false);
