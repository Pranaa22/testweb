document.addEventListener('DOMContentLoaded', () => {
    const movieCards = document.querySelectorAll('.movie-card');
    const mainPoster = document.getElementById('mainPoster');

    // Change main poster on movie card click
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieTitle = card.textContent;
            let newPoster = '';

            switch (movieTitle) {
                case 'Avengers: Infinity War':
                    newPoster = 'infinity-war.jpg';
                    break;
                case 'Avengers: Endgame':
                    newPoster = 'avengers-endgame.jpg';
                    break;
                case 'Thor: Ragnarok':
                    newPoster = 'thor-ragnarok.jpg';
                    break;
                case 'Iron Man':
                    newPoster = 'iron-man.jpg';
                    break;
                default:
                    newPoster = 'infinity-war.jpg';
            }

            mainPoster.src = newPoster;
        });
    });

    // Smooth scroll for movie grid
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.addEventListener('wheel', (e) => {
        e.preventDefault();
        movieGrid.scrollBy({
            left: e.deltaY < 0 ? -100 : 100,
            behavior: 'smooth'
        });
    });
});
