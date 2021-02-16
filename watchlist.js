let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);
if (watchlist === null) {
    watchlist = [];
}
document.querySelector('.movies-container').innerHTML = renderMovies(watchlist);

const watchlistButton = document.getElementById('watchlistBtn');
watchlistButton.addEventListener('click', function() {
    document.location='./watchlist.html';
})

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function(currentMovie) {
        return  `<div class="movie">
        <img class="movie-poster" src="${currentMovie.Poster}" alt="" width="100">
        <p class="movie-title">${currentMovie.Title}</p>
        <p class="movie-release-date">${currentMovie.Year}</p>
        <button id="addBtn">Add</button>
        </div>`
    });
    return movieHtmlArray.join('');
}