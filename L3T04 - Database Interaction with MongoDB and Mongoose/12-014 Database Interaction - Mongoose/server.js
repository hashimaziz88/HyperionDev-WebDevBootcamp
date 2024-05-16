// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import routes
const getBlogs = require('./routes/getBlogs');

// Initialize express
const app = express();

// Set up port for server to listen on
const PORT = process.env.PORT || 8080;

// ! [IMPORTANT]: Replace with your mongoDB URI string. You can get it from your Atlas cluster.
const uri = "mongodb+srv://azizmuhammadhashim6:ed84vt0zXmKqYKsy@cluster-blog.ojv0v1j.mongodb.net/"

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { console.log('Successfully connected to the database!') },
  err => { console.log('Could not connect to the database...' + err) }
);

// Allow app to accept json and url encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:8080/blogs
app.use('/blogs', getBlogs);

// Start up express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
