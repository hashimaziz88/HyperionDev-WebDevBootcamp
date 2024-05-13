const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public directory
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to serve the landing page (index.html)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to serve about.html
app.get("/about", (req, res) => {
  res.redirect("/about.html");
});

// Route to serve contact_us.html
app.get("/contact", (req, res) => {
  res.redirect("/contact_us.html");
});

// Route to serve person data
app.get("/person", (req, res) => {
  fs.readFile("person.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const person = JSON.parse(data);
    res.json(person);
  });
});

// Route to handle errors and serve error page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/error.html");
});

// Start the server and listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
