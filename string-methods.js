const email = "md.rr.talukder@gmail.com";
const givenName = "Md. Rakibur Rahman Talukder";
console.log(email.toUpperCase());
console.log(email.toLowerCase());
console.log(email.startsWith("md"));
console.log(email.endsWith("md"));
console.log(`Length of ${email} is ${email.length}`);

console.log("---------------------");
console.log(givenName.indexOf("Rakib"));
console.log(givenName.indexOf("Ra", 6));

console.log("---------------------");

//! The Search Method

const sData = givenName.search("Rakib");
console.log(sData);
