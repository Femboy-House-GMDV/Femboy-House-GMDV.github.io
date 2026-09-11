import { games } from "./games.js";


const gamesGrid = document.getElementById("games-grid");


function getAction(game) {
    switch (game.status) {
        case "free":
            return {
                text: "Играть →",
                url: game.itch
            };

        case "paid":
            return {
                text: "Купить →",
                url: game.itch
            };

        case "wishlist":
            return {
                text: "В вишлист →",
                url: game.itch
            };

        case "development":
            return {
                text: "Подробнее →",
                url: game.page
            };

        default:
            return {
                text: "Подробнее →",
                url: game.page
            };
    }
}


function createGameCard(game) {
    const card = document.createElement("article");

    card.className = "game-card";

    const action = getAction(game);

    card.innerHTML = `
        <div class="game-image">
            <img
                src="${game.image}"
                alt="${game.name}"
                loading="lazy"
            >
        </div>

        <div class="game-content">

            <h3>${game.name}</h3>

            <p>
                ${game.description}
            </p>

            <div class="game-actions">

                <a
                    href="${game.page}"
                    class="game-link"
                >
                    Подробнее →
                </a>

                <a
                    href="${action.url}"
                    class="game-link game-primary"
                    ${action.url.startsWith("http")
                        ? 'target="_blank" rel="noopener noreferrer"'
                        : ""}
                >
                    ${action.text}
                </a>

            </div>

        </div>
    `;

    return card;
}


function renderGames() {
    gamesGrid.replaceChildren();

    for (const game of games) {
        gamesGrid.appendChild(
            createGameCard(game)
        );
    }
}


renderGames();

const supportButton = document.querySelector(".support-button");
const supportOptions = document.querySelector(".support-options");

supportButton.addEventListener("click", () => {
    supportOptions.classList.toggle("open");
});