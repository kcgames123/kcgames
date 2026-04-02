// script.js

// Game Data
const games = [
    { id: 1, title: 'Game One', genre: 'Action', releaseDate: '2026-01-15' },
    { id: 2, title: 'Game Two', genre: 'Adventure', releaseDate: '2026-02-20' },
    { id: 3, title: 'Game Three', genre: 'Puzzle', releaseDate: '2026-03-10' }
];

// Search Functionality
function searchGames(query) {
    return games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()));
}

// Interactivity Functionality
function displayGames(gameList) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    gameList.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `<h3>${game.title}</h3><p>Genre: ${game.genre}</p><p>Release Date: ${game.releaseDate}</p>`;
        gameContainer.appendChild(gameElement);
    });
}

// Event Listeners
document.getElementById('search-input').addEventListener('input', (event) => {
    const results = searchGames(event.target.value);
    displayGames(results);
});

// Initial Display
window.onload = () => {
    displayGames(games);
};
