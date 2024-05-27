const express = require("express");
const axios = require("axios");
const jwt = require("jwt-simple");
const searchRoutes = require("./routes/search");
const jwtConfig = require("./config/jwtConfig");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to decode JWT
app.use((req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    req.user = jwt.decode(token, jwtConfig.secret);
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});

// Use search routes
app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
