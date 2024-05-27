// Load environment variables from .env file
const dotenv = require("dotenv");
dotenv.config();

// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const getTodos = require("./routes/getTodos");
const login = require("./routes/login");
const register = require("./routes/register");

// Initialize Express application
const app = express();
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Global error handler middleware
// Ensures that the server doesn't crash on unhandled exceptions
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Set up the port for the server to listen on
const PORT = process.env.PORT || 8080;

// MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

// Connect to the database
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("Successfully connected to the database!");
  },
  (err) => {
    console.log("Could not connect to the database..." + err);
  }
);

// Allow the app to parse JSON and URL encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
// All routes related to todos
app.use("/todos", getTodos);
// Login route
app.use("/todos", login);
// Register route
app.use("/todos", register);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
