const movies = [
    {
      name: "The Shawshank Redemption",
      releaseDate: "1994-09-23",
      poster: "https://example.com/shawshank.jpg",
      imdbRating: 9.3
    },
    {
      name: "The Godfather",
      releaseDate: "1972-03-24",
      poster: "https://example.com/godfather.jpg",
      imdbRating: 9.2
    },
    {
      name: "The Dark Knight",
      releaseDate: "2008-07-18",
      poster: "https://example.com/darkknight.jpg",
      imdbRating: 9.0
    },
    {
      name: "Pulp Fiction",
      releaseDate: "1994-10-14",
      poster: "https://example.com/pulpfiction.jpg",
      imdbRating: 8.9
    },
    {
      name: "Schindler's List",
      releaseDate: "1993-12-15",
      poster: "https://example.com/schindler.jpg",
      imdbRating: 8.9
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      releaseDate: "2003-12-17",
      poster: "https://example.com/lotr.jpg",
      imdbRating: 8.9
    },
    {
      name: "Forrest Gump",
      releaseDate: "1994-07-06",
      poster: "https://example.com/forrestgump.jpg",
      imdbRating: 8.8
    },
    {
      name: "Inception",
      releaseDate: "2010-07-16",
      poster: "https://example.com/inception.jpg",
      imdbRating: 8.8
    },
    {
      name: "Fight Club",
      releaseDate: "1999-10-15",
      poster: "https://example.com/fightclub.jpg",
      imdbRating: 8.8
    }
  ];
  
  // Store the array in local storage
  localStorage.setItem('movies', JSON.stringify(movies));
  
  document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.getElementById('movieGrid');
    const movies = JSON.parse(localStorage.getItem('movies'));
  
    if (movies && movies.length) {
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
  
        movieCard.innerHTML = `
          <img src="${movie.poster}" alt="${movie.name}" class="movie-poster">
          <h2>${movie.name}</h2>
          <p>Release Date: ${movie.releaseDate}</p>
          <p>IMDb Rating: ${movie.imdbRating}</p>
        `;
  
        movieGrid.appendChild(movieCard);
      });
    }
  });
  