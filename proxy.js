//! The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

const john = { status: "looking for work" };

const handler = {
  get: function (target, propName) {
    console.log(target);
    console.log(propName);
    return target[propName];
  },
};

// const agent = new Proxy(john, {});
// console.log(agent.status);

const agent = new Proxy(john, handler);
console.log(agent.status);

console.log("---------------------");

const ohi = { job: "student " };
const handler2 = {
  set(target, propName, value) {
    if (propName === "payRate") {
      value = value * 0.85;
    }
    target[propName] = value;
  },
};
const agent2 = new Proxy(ohi, handler2);
agent2.payRate = 1000;
console.log(agent2.payRate);
