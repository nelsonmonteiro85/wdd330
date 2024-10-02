const url = "./data/pokemonData.json";
let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
    // Check if the response was successful
    if (response.ok) {
        // Convert the response to JSON
        const data = await response.json();
        doStuff(data);
    } else {
        console.error("Failed to load data from local JSON");
    }
}

function doStuff(data) {
    results = data;
    console.log('first: ', results); // Log the data to verify the results

    const selectElement = document.getElementById('pokemonList');

    // Iterate through each Pokémon and create <option> elements
    results.results.forEach((pokemon) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name; // Set the Pokémon name as the text of the option
        selectElement.appendChild(option); // Append the option to the select element
    });
}

// Call the function to fetch the data
getPokemon(url);

// This will run before the data is fetched
console.log('second: ', results); // This should log 'null' as results is not yet updated
