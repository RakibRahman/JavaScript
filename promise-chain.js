var x = "How are you?";
const s = Promise.resolve(`${x}`);
s.then(success);
s.catch(failed);

function success() {
  console.log("successfully successful");
}
function failed() {
  console.log("Failure is the key to success");
}

//! Promise Chain

const s2 = s.then((v) => {
  return v.toUpperCase();
});
s2.then((val) => {
  console.log(val);
});

const s3 = s2.then((b) => {
  return b.length;
});
s3.then((len) => {
  console.log(`length of the sentence is:${len}`);
});
console.log("---------------------");
