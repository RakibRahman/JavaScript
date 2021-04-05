const btn = document.getElementById("btn");

let timeLimit = false;
let timeGiven = 4000;

const areYouRobot = () => {
  console.log("Time limit crossed");
  timeLimit = true;
  btn.style.backgroundColor = "red";
};

setTimeout(areYouRobot, timeGiven);

const alertInfo = () => {
  if (timeLimit) {
    alert("Time limit exceeded");
  } else {
    alert("Welcome");
  }
};

btn.addEventListener("click", alertInfo);
