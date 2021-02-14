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
