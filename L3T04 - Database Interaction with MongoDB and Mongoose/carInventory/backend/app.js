// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Import dotenv to load environment variables

const app = express();

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());
// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Import car routes
const carRoutes = require("./routes/car.routes");
// Mount car routes under the '/api' prefix
app.use("/api", carRoutes);

// Connect to MongoDB using environment variable for URI
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected")) // Log a success message if connected
  .catch((err) => console.error(err)); // Log an error message if connection fails

// Export the Express application instance
module.exports = app;
