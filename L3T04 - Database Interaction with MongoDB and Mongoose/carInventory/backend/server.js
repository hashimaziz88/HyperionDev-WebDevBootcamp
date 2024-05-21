// server.js
const app = require("./app"); // Import the Express application from app.js

const PORT = process.env.PORT || 5000; // Define the port to listen on, using environment variable or default to 5000

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log a message indicating that the server is running
});
