const employee = {
  name: "Rakib",
  age: 25,
  address: {
    area: "Master Quater",
    city: "Habiganj Sadar",
    district: "Habiganj",
    division: "Sylhet",
  },
};
const { name } = employee;
const { area, city, district, division } = employee.address;
/**
// const {name,address: { line1, city, state, country }, //Nested Destructuring.
// } = employee; 
 */
function getInfo(employee) {
  console.log(`The name of the employee is ${name}`);
  console.log(`The Home area is ${area}`);
  console.log(`The Home City is ${city}`);
  console.log(`The Home District is ${district}`);
  console.log(`The Home Division  is ${division}`);
}

getInfo(employee);
console.log("-------============---------");
//Default Values

const person = {
  name: "Rakib",
  age: 28,
  country: "BD",
};

const { name: fullName, age: years, country: place = "Canada" } = person;

console.log(`I am ${fullName} from ${place} and I am ${years} years old.`);
/**
 * The variables 'name', 'age' and 'country' were extracted from the object person and were assigned to 'fullName', 'years' and 'country' respectively.
 */
console.log("-------============---------");

//Object Destructuring and Functions
function personInfo({ name: x, job: y, hobby: z = "Cricket" } = {}) {
  console.log(x);
  console.log(y);
  console.log(z);
}
personInfo({ name: "Rakib", job: "Developer" });

//personInfo(); //undefined

console.log("-------============---------");
//Rest in Object Destructuring.
var info = {
  givenName: "Rakib",
  country: "BD",
  job: "Developer",
  friends: ["Zakir", "Ohi"],
};

var { givenName, friends, ...others } = info;

console.log(givenName);
console.log(friends);
console.log(others);
