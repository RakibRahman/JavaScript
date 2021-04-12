//! apply() is same as call() but it only takes two arguments. 2nd argument is for function arguments as an array.

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
message.email.msg.apply(message);

console.log("---------------------");

let zakir = {
  fullName: "Zakir Hossian",
  dob: 1994,
  age: function (currentYear, msg) {
    console.log(
      msg + this.fullName + " is " + (currentYear - this.dob) + " years old"
    );
  },
};
zakir.age(2021, "Congratulations! ");

let shuvo = {
  fullName: "Shuvo Islam",
  dob: 1998,
};
zakir.age.apply(shuvo, [2020, "Congrats! "]);

console.log("---------------------");
