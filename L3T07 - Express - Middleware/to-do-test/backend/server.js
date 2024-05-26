// backend/server.js
// Connect to database using password in .env
const dotenv = require("dotenv");
dotenv.config();
// const password = process.env.MONGODB_PASSWORD;

// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const getTodos = require("./routes/getTodos");
const login = require("./routes/login");
const register = require("./routes/register");

// Initialize middleware
const app = express();
app.use(cors());

// Global error handler middleware
// ensures that server doesn't crash on unhandled exceptions
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Set up port for server to listen on
const PORT = process.env.PORT || 8080;

const uri = `mongodb+srv://hashim:8kb987UMZqXPIAmn@practicecluster.bweei76.mongodb.net/`;

// Connect to db
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
app.use(express.json());

// Set up routes to be handled from: http://localhost:8080/todos
app.use("/todos", getTodos);
app.use("/todos", login);
app.use("/todos", register);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
