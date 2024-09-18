// movies.js
const movies = [
    {
        name: "Movie 1",
        releaseDate: "2020-01-01",
        poster: "https://via.placeholder.com/150",
        imdbRating: 7.5
    },
    {
        name: "Movie 2",
        releaseDate: "2019-05-10",
        poster: "https://via.placeholder.com/150",
        imdbRating: 6.8
    },
    {
        name: "Movie 3",
        releaseDate: "2018-07-22",
        poster: "https://via.placeholder.com/150",
        imdbRating: 8.2
    },
    {
        name: "Movie 4",
        releaseDate: "2021-03-15",
        poster: "https://via.placeholder.com/150",
        imdbRating: 7.0
    },
    {
        name: "Movie 5",
        releaseDate: "2017-11-05",
        poster: "https://via.placeholder.com/150",
        imdbRating: 8.0
    },
    {
        name: "Movie 6",
        releaseDate: "2016-06-18",
        poster: "https://via.placeholder.com/150",
        imdbRating: 6.5
    },
    {
        name: "Movie 7",
        releaseDate: "2015-02-12",
        poster: "https://via.placeholder.com/150",
        imdbRating: 7.8
    },
    {
        name: "Movie 8",
        releaseDate: "2014-09-21",
        poster: "https://via.placeholder.com/150",
        imdbRating: 7.3
    },
    {
        name: "Movie 9",
        releaseDate: "2013-12-13",
        poster: "https://via.placeholder.com/150",
        imdbRating: 6.9
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.getElementById('movies-container');
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
            <p>IMDb Rating: ${movie.imdbRating}</p>
        `;
        moviesContainer.appendChild(movieElement);
    });
});
