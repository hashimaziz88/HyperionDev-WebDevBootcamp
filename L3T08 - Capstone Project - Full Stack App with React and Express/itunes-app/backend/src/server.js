const express = require("express");
const axios = require("axios");
const cors = require("cors");
const jwt = require("jwt-simple");
const searchRoutes = require("./routes/search");
const authRoutes = require("./routes/auth"); // Import auth routes
const jwtConfig = require("./config/jwtConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Middleware to decode JWT
app.use((req, res, next) => {
  if (req.path === "/api/token") return next(); // Skip token validation for token generation
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    req.user = jwt.decode(token, jwtConfig.secret);
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});

// Use auth routes
app.use("/api", authRoutes);

// Use search routes
app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
