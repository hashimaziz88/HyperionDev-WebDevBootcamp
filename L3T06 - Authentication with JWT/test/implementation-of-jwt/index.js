const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET;

app.get("/resource", (req, res) => {
  const auth = req.headers["authorization"];
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.send({
      msg: `Hello, ${decoded.name}! Your JSON Web Token has been verified.`,
    });
  } catch (err) {
    res.status(401).send({ err: "Bad JWT!" });
  }
});

app.get("/admin_resource", (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.admin) {
      res.send({ msg: "Success!" });
    } else {
      res
        .status(403)
        .send({ msg: "Your JWT was verified, but you are not an admin." });
    }
  } catch (e) {
    res.sendStatus(401);
  }
});

// Allows us to parse the body of a request
app.use(bodyParser.json());

// User login
app.post("/login", (req, res) => {
  // Req.body is sent by the client
  const usr = req.body.username;
  const pwd = req.body.password;
  if (usr === "zama" && pwd === "secret") {
    payload = {
      name: usr,
      admin: true,
    };
    const token = jwt.sign(JSON.stringify(payload), JWT_SECRET, {
      algorithm: "HS256",
    });
    res.send({ token: token });
  } else {
    res.status(403).send({ err: "Incorrect login!" });
  }
});

// Start the server
app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
