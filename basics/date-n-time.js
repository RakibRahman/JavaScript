var rightNow = new Date();
console.log(rightNow.toLocaleDateString());
console.log(rightNow.toString());
console.log(rightNow.getDay()); //! extracts the day of the week

console.log("---------------------------");

var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var now = new Date();
var theDay = now.getDay();
var theMonth = now.getMonth();
var theDate = now.getDate();
var theYear = now.getFullYear();
var theHour = now.getHours();
var theMinute = now.getMinutes();
var theSecond = now.getSeconds();
var theMS = now.getMilliseconds();
var theTotalMs = now.getTime(); //! Number of milliseconds since Jan. 1,1970
var today = dayNames[theDay];

console.log("All Date & Time:", now);
console.log("Daye no:", theDay);
console.log("Current Month:", theMonth);
console.log("Current Date:", theDate);
console.log("Current Year:", theYear);
console.log("Current Hour", theHour);
console.log("Current Minute:", theMinute);
console.log("Current Second:", theSecond);
console.log("Current Milliseconds:", theMS);
console.log("Number of milliseconds since Jan. 1,1970:", theTotalMs);
console.log("Today is:", today);

console.log("---------------------");

var future = new Date("June 25,2022");
var msFuture = future.getTime();
var difference = msFuture - theTotalMs;
console.log(future);
console.log(msFuture);
console.log(difference);

console.log("---------------------");

var d = new Date();
var fullYear = d.setFullYear(2003);
var minutes = d.setMinutes(6);
console.log(fullYear);
console.log(minutes);
