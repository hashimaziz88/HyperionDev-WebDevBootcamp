// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env

// Import routes
const getBlogs = require("./routes/getBlogs");

// Initialize express
const app = express();

// Set up port for server to listen on
const PORT = process.env.PORT || 8080;

// Connect to the database
const uri = process.env.MONGODB_URI; // Retrieve MongoDB URI from environment variable
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log("Successfully connected to the database!");
  },
  (err) => {
    console.log("Could not connect to the database..." + err);
  }
);

// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:8080/blogs
app.use("/blogs", getBlogs);

// Start up express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 