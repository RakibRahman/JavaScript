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

console.log("---------------------");

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(`Current Step: ${this.step}`); //shows the current step
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.up();
// ladder.showStep();
console.log("---------------------");

//! make calls chainable
// ladder.up().up().down().showStep();
console.log("---------------------");

ladder.up().up().down().up().down().showStep();
ladder.up().up().showStep();
