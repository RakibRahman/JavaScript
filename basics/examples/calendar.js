let monthName = "March";
let days = 31;
let startDay = 3;

console.log("\n\nCalendar of", monthName, "\n");
console.log("Sun     Mon     Tue     Wed     Thu     Fri     Sat");

for (let i = 0; i < 5; i++) {
  var dayRows = "";
  for (let j = 1; j <= 7; j++) {
    let currentDay = 7 * i + j - startDay;

    if (currentDay > days) {
      break;
    } else if (currentDay < 1) {
      currentDay = "";
    }

    if (currentDay > 9) {
      dayRows += currentDay + "    ";
    } else {
      dayRows += currentDay + "     ";
    }
  }

  console.log(dayRows);
}
