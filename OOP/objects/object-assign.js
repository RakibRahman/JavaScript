//! The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
//?Object.assign() does not create and return a new object; it directly modifies then returns the same target object that was passed in

const target = { a: 1, b: 2 };
const source = { b: "Rakib", c: "Rakin" };

const target2 = Object.assign(target, source);
console.log(target);
console.log(target2);

const newTarget = {};

const newSource = { num: 49 };
Object.assign(newTarget, newSource);
console.log(newTarget);
const duck = {
  hasBill: true,
};
const beaver = {
  hasTail: true,
};
const otter = {
  hasFur: true,
  feet: "webbed",
};

const platypus = Object.assign({}, duck, beaver, otter);
console.log(platypus);

//! platypus doesn't exist in any of the three source objects' prototype chains
console.log(platypus.constructor);

console.log(platypus.isPrototypeOf(duck));
console.log(duck.isPrototypeOf(platypus));
console.log(beaver.isPrototypeOf(duck));
