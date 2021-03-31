let requestXML = new XMLHttpRequest(); //? create instance object
let url = "https://api.chucknorris.io/jokes/random";
requestXML.open("GET", url); //? open request
requestXML.send(); //? send request
console.log(requestXML);

requestXML.onreadystatechange = () => {
  console.log(requestXML.readyState);
  requestXML.readyState == 4 && requestXML.status == 200
    ? console.log(requestXML.response)
    : "There was a problem with the request";
};
