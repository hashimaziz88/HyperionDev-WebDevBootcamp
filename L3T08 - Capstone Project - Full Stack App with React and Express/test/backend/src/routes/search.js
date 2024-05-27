const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  const { term, media } = req.query;

  axios
    .get(`https://itunes.apple.com/search?term=${term}&media=${media}`)
    .then((response) => res.json(response.data))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
