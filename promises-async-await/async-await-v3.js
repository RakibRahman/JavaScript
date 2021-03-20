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
const getMovies = () => {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(`${index}: ${movie.title}`)
        })
    }, 1000);
};
const addMovies = (movie) => {
    
    }



addMovies(movieNew);
getMovies();
