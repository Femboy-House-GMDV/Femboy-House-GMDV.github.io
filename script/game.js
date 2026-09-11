import { games } from "./game-data.js";

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
        default:
            return {
                text: "Подробнее →",
                url: game.page
            };
    }
}


function createGameCard(game) {
    const action = getAction(game);

    const imageContent = game.status === "development"
        ? `
            <div class="game-development">
                <span>Contributing...</span>
            </div>
        `
        : `
            <img src="${game.image}" alt="${game.name}" loading="lazy">
        `;

    const card = document.createElement("article");
    card.className = "game-card";

    card.innerHTML = `
        <div class="game-image">
            ${imageContent}
        </div>

        <div class="game-content">
            <h3>${game.name}</h3>
            <p>${game.description}</p>

            <div class="game-actions">
                <a href="${action.url}"
                   class="game-link game-primary"
                   ${action.url.startsWith("http")
                       ? 'target="_blank" rel="noopener noreferrer"'
                       : ""}>
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
        const card = createGameCard(game);

        gamesGrid.appendChild(card);
    }
}


renderGames();