class User {
  constructor(id, name, age, email, phone) {
    console.log(`Info of Candidate no ${id} : `);
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
  info() {
    console.log(`Candidate' Name: ${this.name}`);
    console.log(`Candidate' Age: ${this.age}`);
  }
  contact() {
    console.log(
      `Candidate's email: ${this.email} \nCandidate' phone: ${this.phone} `
    );
  }
}
const pain = new User(49, "Pain", 24, "pain@gmail.com", 0189661796);
pain.info();
pain.contact();

console.log("---------------------");

class newUser extends User {
  constructor(id, name, age, email, phone, city) {
    //super refers to the parent class
    //super must be called before any use of keyword this
    super(id, name, age, email, phone);
    this.city = city;
  }
  address() {
    console.log(`Current city: ${this.city}`);
  }
}
const rakin = new newUser(
  03,
  "Rakin",
  42,
  "rakin@yeah.com",
  01889445,
  "Sylhet"
);
rakin.info();
rakin.contact();
rakin.address();

console.log("\n");
console.log(typeof User);
console.log(typeof newUser);
