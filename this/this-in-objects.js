let id = 50;
let user = {
  id: 49,
  userName: "Rakib",

  info: function () {
    console.log(this); //!refers to the object
    // console.log(`User ID: ${this.id}`);
    // console.log(`User name: ${this.userName}`);
  },
};
console.log(id);
user.info();

console.log("---------------------");

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
