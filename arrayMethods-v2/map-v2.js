// The Map method allows you to iterate through all the items in the array to carry out a specific task based on the provided function.
const films = [
  { name: "Tenet", year: 2020, rating: 7.5 },
  { name: "Wonder Woman 1984", year: 2020, rating: 5.4 },
  { name: "The Karate Kid", year: 1984, rating: 7.3 },
  { name: "Avengers: Endgame", year: 2019, rating: 8.4 },
  { name: "The Godfather", year: 1972, rating: 9.2 },
  { name: "Godzilla", year: 2014, rating: 6.4 },
  { name: "The Croods: A New Age", year: 2020, rating: 7.0 },
];

let names = films.map((films) => films.name);
console.log(names);

let years = films.map((films) => films.year);
console.log(years);

let total = years.reduce((years, index) => years + index);
console.log(total);

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log("----");

const result = () => {
  let z = arr.flat(Infinity);
  return z.map((x) => x * x);
};
console.log(result());
