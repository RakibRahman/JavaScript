const output = document.getElementById("output");
const promiseDelay = (duration, value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, duration);
  });
};

const message = [
  "hello",
  "how can i help you",
  "need help?",
  "share your thoughts",
];
function* APIMessageGenerator() {
  for (let i = 0; i < message.length; i++) {
    yield promiseDelay(i * 1000, message[i]);
  }
}
const gen = APIMessageGenerator();

async function processMessages() {
  for await (value of gen) {
    output.innerHTML += `<p> Bot: ${value}`;
  }
}
processMessages();
