const mongoose = require('mongoose');

// Initialize our schema
const blogSchema = mongoose.Schema({
  title: {
    // Sets the data type of the title field to be a string
    type: String,
    // Sets the title field to be required
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false,
    // Sets a default value for the author field if not provided
    default: "anonymous"
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now
  }
});

// module.exports makes the model available outside of your module

/* The first argument for the mongoose.model should be the name of the
document in your MongoDB collection (remember that spelling is
important, and that this includes casing) */
module.exports = mongoose.model('Blog', blogSchema);
