let message = {
  type: "email",
  to: "labib",
  from: "pain",
  email: {
    type: "Electronic Mail",
    subject: "study",
    msg: function () {
      console.log(`Message received as  ${this.type}`);
    },
  },
};

message.email.msg();
message.email.msg.call(message);

console.log("---------------------");

var numbers = [
  {
    name: "Physician",
  },
  {
    name: "Police",
  },
  {
    name: "Tablespoon",
  },
];
numbers.forEach(function (item) {
  (function () {
    console.log(this.name);
  }.call(item));
});
console.log("---------------------");
let zakir = {
  fullName: "Zakir Hossian",
  dob: 1994,
  age: function (currentYear) {
    console.log(
      this.fullName + " is " + (currentYear - this.dob) + " years old"
    );
  },
};
zakir.age(2021);

let shuvo = {
  fullName: "Shuvo Islam",
  dob: 1998,
};
zakir.age.call(shuvo, 2020);
