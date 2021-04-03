//! create a function that accepts a email string

const obscureEmail = (email) => {
  const [name, domain] = email.split("@");

  //return `${name[0]}${new Array(name.length)}@${domain}`;
  return `${name[0]}${new Array(name.length).join("*")}@${domain}`;

  /*
  ! name[0] to get the first character of email
  ! new Array(name.length) to construct a new array from the length of the name string
  ! join('*') will replace all values of new Array(name.length)

  */
};
console.log(obscureEmail("rakibGong@gmail.com"));
console.log(obscureEmail("ashKhan@gmail.com"));
console.log(obscureEmail("zakirMiya@gmail.com"));
