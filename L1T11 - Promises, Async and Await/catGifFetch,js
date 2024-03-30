// Asynchronous function to fetch a random cat GIF
async function fetchRandomCatGif() {
  // Fetching data from the provided URL
  const response = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif"
  );

  // Check if the fetch operation was successful
  if (!response.ok) {
    // Log an error message if the fetch operation failed
    console.error("Failed to fetch cat GIF. Status:", response.status);
    return; // Exit the function if there's an error
  }

  // If the fetch operation was successful, extract the URL of the GIF from the response
  const imageUrl = response.url; // Retrieve respone URL

  // Log a success message along with the URL of the fetched cat GIF
  console.log("Cat GIF fetched successfully!", imageUrl);
}

// Call the fetchRandomCatGif function to fetch and display a random cat GIF
fetchRandomCatGif();

// Log a message indicating that this line of code will still be executed
console.log("I'll still be running though");
