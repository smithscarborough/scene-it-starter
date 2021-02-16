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