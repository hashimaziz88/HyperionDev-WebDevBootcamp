require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  secret: process.env.SECRET, // Access the secret from environment variables
};
