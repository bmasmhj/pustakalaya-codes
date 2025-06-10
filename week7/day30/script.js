const grid = document.getElementById("pokemon-grid");

async function fetchPokemonList(limit = 50) {
// This function fetches a list of Pokémon from the PokeAPI and displays them in a grid format.
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await response.json();
  const pokemonList = data.results;

  for (const pokemon of pokemonList) {
    const pokeData = await fetchPokemonDetails(pokemon.url);
    displayPokemon(pokeData);
  }
}

async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  return await response.json();
}

function displayPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;

  const name = document.createElement("div");
  name.classList.add("pokemon-name");
  name.textContent = pokemon.name;

  card.appendChild(img);
  card.appendChild(name);
  grid.appendChild(card);
}

fetchPokemonList();
