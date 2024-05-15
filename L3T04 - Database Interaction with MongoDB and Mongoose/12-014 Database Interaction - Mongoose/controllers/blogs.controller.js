const Blog = require('../models/blog.model');

exports.create = async (req, res) => {
    try {
        // Create a new blog
        const blogModel = new Blog({
            title: 'Example Code',
            text: 'Demonstrating how to add data to a database using Mongoose',
            author: 'HyperionDev'
        });

        // Save the new blog
        const savedBlog = await blogModel.save();

        // Success response
        console.log(savedBlog);
        res.send('The blog has been added');
    } catch (error) {
        // Error response
        console.error(error);
        res.status(500).send({
            message: "Some error occurred while creating the blog."
        });
    }
};

exports.findAll = (req, res) => {
    // Use the "find" method to return all blogs
    Blog.find()
        .then(blogs => {
            // Send the retrieved blogs as a success response
            res.send(blogs);
        })
        .catch(err => {
            // Error response
            console.log(err);
            res.status(500).send({
                message: "An error occurred while retrieving blogs"
            });
        });
};


exports.updateByAuthor = async (req, res) => {
    try {
        // Define the query to find blogs with the specified author
        const query = { author: 'HyperionDev' };

        // Define the new data to update the author
        const update = { author: 'NewAuthorName' };

        /* Use the "findOneAndUpdate" method to update a blog with the
        specified author and set the "new" option to true to get the
        updated document as the result */
        const updatedBlog = await Blog.findOneAndUpdate(query, update, { new: true });

        if (updatedBlog) {
            res.send("Updated successfully");
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (error) {
        console.error("Something went wrong when updating data.", error);
        res.status(500).send("An error occurred while updating.");
    }
};

exports.deleteBlogsByAuthor = async (req, res) => {
    try {
        // Remove all blogs with the specified author name
        const deleteResult = await Blog.deleteMany({ author: 'NewAuthorName' });

        if (deleteResult.deletedCount > 0) {
            res.send("Successfully deleted all blogs from author.");
        } else {
            res.send("Author not found...");
        }
    } catch (error) {
        console.error("An error occurred while removing blogs.", error);
        res.status(500).send("An error occurred while removing blogs.");
    }
};

