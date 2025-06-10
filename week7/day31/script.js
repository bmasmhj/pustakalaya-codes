// Main function to fetch and display a list of Pokémon
async function getPokemon() {
    // Fetch the first 50 Pokémon from the PokeAPI
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    let data = await response.json();

    // Extract the list of Pokémon from the API response
    let pokemonList = data.results;
    // Get the DOM element where Pokémon cards will be displayed
    let pokemonGrid = document.getElementById("pokemon-grid");

    // For each Pokémon, fetch its details and add its card to the grid
    pokemonList.map(async (eachdata) => {
        // Fetch the HTML for a single Pokémon card
        let pokemonDetails = await getPokemonDetails(eachdata.url);
        // Append the card's HTML to the grid
        pokemonGrid.innerHTML += pokemonDetails;
    });
}

// Fetches details for a single Pokémon and returns HTML for its card
async function getPokemonDetails(url) {
    // Fetch detailed data for a single Pokémon
    let singlepokemon = await fetch(url);
    let data = await singlepokemon.json();
    // Return an HTML string representing the Pokémon card
    return `<div class="pokemon-card">
            <div class="pokemon-info">
                    <img src="${data.sprites.front_default}" alt="">
                    <span>${data.name}</span>
            </div>
            <div class="pokemon-moves">
                    <small>Height : ${data.height}</small>
                    <small>Base Experience : ${data.base_experience}</small>
                    <small>Species : ${data.species.name}</small>
                    <small>Weight : ${data.weight}</small>
            </div>
        </div>`;
}

// Call the main function to start fetching and displaying Pokémon
getPokemon();
