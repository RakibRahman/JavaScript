const ninja = {
  name: "Uzumaki",
  jutsu: ["Shadow clone", "Rasengan"],

  toString: function () {
    //console.log(`${this.name} has jutsus like ${this.jutsu}`);
    this.jutsu.forEach((powers) => {
      //arrow function works best with "this keyword"
      //to bind to the actual object of this
      console.log(`${this.name} has ${powers}`);
    });
  },
};
ninja.toString();
console.log("---------===---------");
var person = {
  firstName: "Rakib",
  lastName: "Talukder",
  skills: ["HTML", "CSS", "JavaScript", "Tailwind", "SASS"],

  fullInfo: function () {
    console.log(`Candidate name is ${this.firstName} ${this.lastName}`);
    console.log(`Skills: ${this.skills}`);
    //print each skill
    // this.skills.forEach(function (items) {
    //   console.log(` skill: ${items}  `);
    // });
  },
};

person.fullInfo();

console.log("---------------------");

function hi(arg) {
  console.log(this + " hello to " + arg);
}

hi("Readers");

hi.call("thisValue", "Readers");

let obj = {
  name: "Sebu Elias",
  hiAgain: function (arg) {
    console.log(this.name + " welcomes " + arg);
  },
};

// So when we call
obj.hiAgain("reader");

// It is called like,
obj.hiAgain.call(obj, "reader");
