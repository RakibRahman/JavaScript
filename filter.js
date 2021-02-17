//The filter method can be used to filter or extract any type of information from an array based on a condition.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = arr.filter(function (n) {
  return n % 2 == 0;
});
console.log("Even Numbers:", even);

let greater = arr.filter(function (n) {
  return n >= 8;
});
console.log("Greater Numbers:", greater);
console.log("---------------------");
const films = [
  { name: "Tenet", year: 2020, rating: 7.5 },
  { name: "Wonder Woman 1984", year: 2020, rating: 5.4 },
  { name: "The Karate Kid", year: 1984, rating: 7.3 },
  { name: "Avengers: Endgame", year: 2019, rating: 8.4 },
  { name: "The Godfather", year: 1972, rating: 9.2 },
  { name: "Godzilla", year: 2014, rating: 6.4 },
  { name: "The Croods: A New Age", year: 2020, rating: 7.0 },
];

let oldFlims = films.filter((films) => films.year < 2000);

console.log(oldFlims);

let newFlims = films.filter((flims) => flims.year > 2000);
console.log(newFlims);
