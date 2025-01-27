// Sample movie data
const movies = [
    { title: 'Southpaw 2: The Revenge', genre: 'Action', image: 'movie-poster1.jpg' },
    { title: 'The Navarone', genre: 'Drama', image: 'movie-poster2.jpg' },
    { title: 'Avatar', genre: 'Sci-Fi', image: 'movie-poster3.jpg' },
    { title: 'The Dark Knight', genre: 'Action', image: 'movie-poster4.jpg' },
    { title: 'Finding Nemo', genre: 'Animation', image: 'movie-poster5.jpg' }
];

// Function to display movies
function displayMovies(filteredMovies) {
    const moviesList = document.getElementById('movies-list');
    moviesList.innerHTML = '';

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        moviesList.appendChild(movieCard);
    });
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
});

// Initial display of all movies
displayMovies(movies);
