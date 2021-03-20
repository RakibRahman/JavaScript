//!Async/Await makes it easier to write promises. The keyword ‘async’ before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.

//! A promise is a value that may produce a value in the future.

const movies = [
  {
    title: `The Dark Knight`,
    body: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. `,
  },
  {
    title: `The Empire Strikes Back`,
    body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.`,
  },
  {
    title: `The Shawshank Redemption`,
    body: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. `,
  },
];
const movieNew = {
  title: `The Shining`,
  body: `Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.`,
};
const movieNew2 = {
  title: `Tom and Jerry`,
  body: `A legendary rivalry reemerges when Jerry moves into New York City's finest hotel on the eve of the wedding of the century, forcing the desperate event planner to hire Tom to get rid of him`,
};
const movieNew3 = {
  title: `Godzilla vs. Kong`,
  body: `Fearsome monsters Godzilla and King Kong square off in an epic battle for the ages, while humanity looks to wipe out both of the creatures and take back the planet once and for all.`,
};
const getMovies = () => {
  setTimeout(() => {
    movies.forEach((movie, index) => {
      console.log(`${index + 1}: ${movie.title}`);
    });
  }, 500);
};
const addMovies = (...movie) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${movies.push(...movie)}`);
    }, 1000);

    setTimeout(() => {
      reject("No data found from the server,an error happened");
    }, 1500);
  });
};

const  movieList= async()=> {
  await addMovies(movieNew, movieNew2, movieNew3);
  getMovies(); //? waiting for addMovies() to be executed in the async function.
}

movieList();
/*
! addMovies() is async, so getMovies() will only run after addMovies() is done.

*/