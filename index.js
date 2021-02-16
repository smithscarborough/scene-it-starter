function saveToWatchList(imdbID) {
    const movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist === null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    return movie;
}

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

document.addEventListener('DOMContentLoaded', function() {
    // code here will execute after the document is loaded
    document.querySelector('#search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchString = document.querySelector('.form-control.search-bar').value 
        const urlEncodedSearchString = encodeURIComponent(searchString);
        console.log(urlEncodedSearchString);
        fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
        .then(res => res.json())
        .then(data => {
        console.log(data.Search)
        const moviesContainer = document.querySelector('.movies-container');
        var movieHTML = renderMovies(data.Search);
        moviesContainer.innerHTML = movieHTML;
        movieData = data.Search;
        })
    })
})

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

// function renderMovies(movieArray) {
//     const movieHtmlArray = movieArray.map(function(currentMovie) {

//     })
// }
    
