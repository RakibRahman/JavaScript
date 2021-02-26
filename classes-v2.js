class User {
  constructor(id, name, age, email) {
    console.log(`Info of ID ${id} : `);
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  info() {
    console.log(` Name is: ${this.name}`);
    console.log(` Age is: ${this.age}`);
  }
}
const pain = new User(49, "Pain", 24, "pain@gmail.com");
pain.info();
