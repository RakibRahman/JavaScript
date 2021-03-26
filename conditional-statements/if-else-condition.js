// let surName = "Talukder";
// if (surName === "talukder") {
//   console.log("Welcome");
// }

let score = 50;
if (score >= 80 || score >= 90) {
  console.log("You have got A+");
  if (score >= 95) {
    console.log("You have got AA+");
  }
} else if (score >= 70) {
  console.log("You have got A-");
} else if (score >= 60) {
  console.log("You have got B+");
} else if (score >= 50) {
  console.log("You have got B-");
} else {
  console.log("Try Again");
}

let random = Math.random();

if (random < 0.5) {
  console.log("Head");
} else {
  console.log("Tail");
}
