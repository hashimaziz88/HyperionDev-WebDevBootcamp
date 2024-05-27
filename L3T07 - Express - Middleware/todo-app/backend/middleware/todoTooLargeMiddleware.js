// backend/middleware/todoTooLargeMiddleware

// Don't allow todos longer than 140 characters to enter the database
const todoTooLargeMiddleware = (req, res, next) => {
  const { todo_name } = req.body;
  const { todo_description } = req.body;

  try {
    if (todo_name.length > 140 || todo_description.length > 140) {
      res.status(400).send("400 Todo description is far too long");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { todoTooLargeMiddleware };
