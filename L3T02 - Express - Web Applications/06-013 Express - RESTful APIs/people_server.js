const { ok } = require("assert");
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// base function - does nothing but greet
app.get("/greet", (req, resp) => {
  const name = req.query.name;
  if (!name) {
    resp.send("Hello world");
  } else {
    resp.send("Hello, " + name);
  }
});

// utility function - gets person data, and creates the file if it doesn't exist
function getPeople() {
  try {
    const content = fs.readFileSync("people.json");
    return JSON.parse(content);
  } catch (e) {
    // file non-existent
    fs.writeFileSync("people.json", "[]");
    return [];
  }
}

function addPerson(name) {
  const people = getPeople();
  people.push(name);
  fs.writeFileSync("people.json", JSON.stringify(people));
}

function deletePerson(name) {
  const people = getPeople();
  const i = people.indexOf(name);
  people.splice(i, 1);
  fs.writeFileSync("people.json", JSON.stringify(people));
}

// create new person
app.post("/person/", (req, resp) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.indexOf(name) > -1) {
    resp.send("Person already exists");
  } else {
    addPerson(name);
    resp.send("Success, added person");
  }
});

// update person
app.put("/person/", (req, resp) => {
  const oldName = req.query.name;
  const newName = req.query.newName;
  const people = getPeople();
  const i = people.indexOf(oldName);
  if (i > -1) {
    people[i] = newName;
    fs.writeFileSync("people.json", JSON.stringify(people));
    resp.send(JSON.stringify(people));
  } else {
    resp.send("Person does not exist");
  }
});

// check whether person exists
app.get("/person/", (req, resp) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.indexOf(name) > -1) {
    resp.sendStatus(200).json({ message: "Success!" });
  } else {
    resp.send("Person does not exist");
  }
});

// delete person
app.delete("/person/", (req, resp) => {
  const name = req.query.name;
  const people = getPeople();
  if (people.indexOf(name) > -1) {
    deletePerson(name);
    resp.send("Success, deleted person");
  } else {
    resp.send("Person does not exist");
  }
});

app.listen(port, () => console.log("Listening engaged"));
