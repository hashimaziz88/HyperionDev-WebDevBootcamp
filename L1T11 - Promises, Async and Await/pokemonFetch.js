// Function to fetch information about a Pokémon from the PokeAPI using the provided URL
function getPokemonInfo(url) {
  // Return a promise to handle asynchronous operations
  return new Promise((resolve, reject) => {
    // Fetch data from the provided URL
    fetch(url)
      // Parse the response as JSON
      .then((response) => response.json())
      // Extract necessary information from the JSON response
      .then((pokemonInfo) => {
        // Destructure relevant data from the response object
        const { name, weight, abilities } = pokemonInfo;
        // Resolve the promise with an object containing the extracted information
        resolve({ name, weight, abilities });
      })
      // Catch and handle any errors that occur during the process
      .catch((error) => reject(error)); // Handle errors with reject
  });
}

// URL of the Pokémon to fetch information for
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/charizard";

// Call the getPokemonInfo function with the provided URL
getPokemonInfo(pokemonUrl)
  // Once the promise is resolved, log the Pokémon's information to the console
  .then((pokemonInfo) => {
    console.log("Name:", pokemonInfo.name);
    console.log("Weight:", pokemonInfo.weight);
    console.log("Abilities:", pokemonInfo.abilities);
  })
  // If an error occurs during the process, log it to the console
  .catch((error) => console.error("Error fetching Pokemon info:", error));

// Log a message indicating that this line of code will still be executed
console.log("I'll still be running though");