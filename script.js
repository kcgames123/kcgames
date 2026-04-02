// Game Database
const games = [
    {
        id: 'geometry-dash',
        name: 'Geometry Dash',
        category: 'Platformer',
        description: 'Fast-paced rhythm platformer',
        color: '#3b82f6',
        url: 'games/geometry-dash/index.html'
    },
    {
        id: 'space-waves',
        name: 'Space Waves',
        category: 'Arcade',
        description: 'Arcade space adventure',
        color: '#06b6d4',
        url: 'games/space-waves/index.html'
    }
];

// Display games on page load
document.addEventListener('DOMContentLoaded', () => {
    displayGames(games);
});

// Display games in grid
function displayGames(gamesToShow) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    if (gamesToShow.length === 0) {
        gamesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #cbd5e1;">No games found. Try a different search.</p>';
        return;
    }

    gamesToShow.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.onclick = () => playGame(game.id);

        gameCard.innerHTML = `
            <div class="game-card-img" style="background: linear-gradient(135deg, ${game.color}, ${game.color}99);"></div>
            <div class="game-card-info">
                <h3>${game.name}</h3>
                <p>${game.category}</p>
            </div>
        `;

        gamesGrid.appendChild(gameCard);
    });
}

// Search functionality
document.getElementById('searchBox').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm)
    );
    displayGames(filtered);
});

// Play game
function playGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById('gameModal');
    const gamePlayer = document.getElementById('gamePlayer');

    gamePlayer.innerHTML = `<iframe src="${game.url}" allowfullscreen></iframe>`;
    modal.style.display = 'block';
}

// Close game modal
function closeGame() {
    document.getElementById('gameModal').style.display = 'none';
    document.getElementById('gamePlayer').innerHTML = '';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGame();
    }
});

// CTA button
document.querySelector('.cta-button')?.addEventListener('click', () => {
    playGame('geometry-dash');
});