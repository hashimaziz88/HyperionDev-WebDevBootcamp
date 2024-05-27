const express = require("express");
const axios = require("axios");

const router = express.Router();

// Endpoint to search iTunes API based on query parameters
router.get("/", (req, res) => {
  const { term, media } = req.query; // Extract query parameters

  // Make a request to iTunes API with provided parameters
  axios
    .get(`https://itunes.apple.com/search?term=${term}&media=${media}`)
    .then((response) => res.json(response.data)) // Send the response data
    .catch((error) => res.status(500).send(error.message)); // Handle errors
});

module.exports = router;
