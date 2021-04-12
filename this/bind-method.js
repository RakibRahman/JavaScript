let user = {
  userName: "nagato",
  specialty: "rinngegan",
  clan: "uzumaki",
  info: {
    userName: "nagato",

    specialty: "rinngegan",
    jutsu: "shinra tensei",
    msg: function () {
      console.log(this.userName + "'s specialty is " + this.specialty);
    },
  },
};
user.info.msg();
user.info.msg.bind(user); //! will return function definition
const userFn = user.info.msg.bind(user);
userFn();

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

let ohi = {
  fullName: "Ohi Miya",
  dob: 1999,
};

// zakir.age.call(ohi, 2021, "Move on! ");
// zakir.age.apply(ohi, [2021, "Yeayy "]);

const ohiInfo = zakir.age.bind(ohi, 2020);
ohiInfo();
ohiInfo("Wow! ");

console.log("---------------------");

const ohiInfo2 = zakir.age.bind(ohi);

ohiInfo2(2021, "Hello Boss! ");
ohiInfo2(2005, "Nice! ");
ohiInfo2(2000, "Damn! ");
