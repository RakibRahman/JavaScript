const boxStyle = document.querySelector(".box"); //!  Get a reference to the .box element
const widthBtn = document.querySelector("#width"); //!  Get a reference to the #width element and so on

//?  On click change the width of .box
widthBtn.addEventListener("click", () => {
  boxStyle.style.width = "300px";
});

//? Rotate

const rotateBtn = document.querySelector("#rotate");
rotateBtn.addEventListener("click", () => {
  boxStyle.style.transform = "rotate(5deg)";
});

//! Background Color

const bgBTn = document.querySelector("#bgcolor");
bgBTn.addEventListener("click", () => {
  boxStyle.style.backgroundColor = "black";
});

//! Text Color
const txtClr = document.querySelector("#color");

txtClr.onclick = () => {
  boxStyle.style.color = "black";
};

//! Text Center

const txtCenter = document.querySelector("#vertical");

const centerTxt = () => {
  boxStyle.style.lineHeight = "200px";
};

//! Reset

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  boxStyle.style.width = "200px";
  boxStyle.style.transform = "rotate(0deg)";
  boxStyle.style.lineHeight = "initial";
  boxStyle.style.backgroundColor = "#f14e0d";
  boxStyle.style.color = "white";
});
