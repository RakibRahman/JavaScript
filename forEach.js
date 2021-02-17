// ForEach

// The Foreach method also allows us to iterate through all the items in an array but the difference is that it won't create any new array but rather it will execute the provided function on each item.

const films = [
  { name: "Tenet", year: 2020, rating: 7.5 },
  { name: "Wonder Woman 1984", year: 2020, rating: 5.4 },
  { name: "The Karate Kid", year: 1984, rating: 7.3 },
  { name: "Avengers: Endgame", year: 2019, rating: 8.4 },
  { name: "The Godfather", year: 1972, rating: 9.2 },
  { name: "Godzilla", year: 2014, rating: 6.4 },
  { name: "The Croods: A New Age", year: 2020, rating: 7.0 },
];

films.forEach((flim) =>
  console.log(
    `${flim.name} was released on ${
      flim.year
    } & has a ${"rating".toUpperCase()} of ${flim.rating}`
  )
);
