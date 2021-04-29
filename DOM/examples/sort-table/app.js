const table = document.getElementById("grid");
const tbody = table.querySelector("tbody");
const btn = document.getElementById("btn");

function sortData(e) {
  let th = e.target;
  if (th.tagName !== "TH") return;
  e.target.classList.toggle("bg");
  console.log(th.cellIndex);
  console.log(th.dataset.type);
  compareData(th.cellIndex, th.dataset.type);
}
function compareData(colNum, type) {
  let rowArray = Array.from(tbody.rows);
  console.log(rowArray);

  let compare;
  //! compare(a, b) compares two rows, need for sorting
  switch (type) {
    case "number":
      compare = function (a, b) {
        return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
        console.log("www");
      };
      break;
    case "string":
      compare = function (a, b) {
        return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }
  //? sort
  rowArray.sort(compare);
  tbody.append(...rowArray);
}
table.addEventListener("click", sortData);

function inputData(e) {
  const age = document.querySelector("#inputAge");
  const name = document.querySelector("#inputName");

  if (!age.value && !name.value) return false;

  tbody.innerHTML += `
  <tr>
  <td>${age.value}</td>
  <td>${name.value}</td>
</tr>
  
  
  `;
  age.value = "";
  name.value = "";
}

btn.addEventListener("click", inputData);
