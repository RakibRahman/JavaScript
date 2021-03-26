//The Set object lets you store unique values of any type, whether primitive values or object references.

//! Union of sets
//?  find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
console.log(c);

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);
console.log("---------------------");

//! Intersection of Sets
//?  find the union of set A and set B (A ∩ B)

let f = [1, 2, 3, 4, 5];
let g = [3, 4, 5, 6];

let setF = new Set(f);
let setG = new Set(g);

let h = f.filter((value) => setG.has(value));
console.log(h);
let setH = new Set(h);
console.log(setH);

//! Difference of sets
//? find the different of set A and set B (A \ B)
let j = [1, 2, 3, 4, 5];
let k = [3, 4, 5, 6];

let J = new Set(j);
let K = new Set(k);

let l = j.filter((num) => !K.has(num));
let L = new Set(l);

console.log(L);
