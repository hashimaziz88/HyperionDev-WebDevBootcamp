const express = require('express');
// Use built-in Express router
const router = express.Router();
const blogController = require('../controllers/blogs.controller');

// Create a new blog
router.post('/add', blogController.create);

// Get all blogs
router.get('/', blogController.findAll);

// Update a blog with a new author name
router.put('/update-author', blogController.updateByAuthor);

// Delete all blogs with specified author name
router.delete('/delete-author', blogController.deleteBlogsByAuthor);


module.exports = router;

/* If you need a refresher about routing in Express, see here: 
https://expressjs.com/en/starter/basic-routing.html

and here: 
https://expressjs.com/en/guide/routing.html 
*/