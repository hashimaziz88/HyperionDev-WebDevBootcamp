// backend/middleware/checkEmailMiddleware.js

const checkEmailMiddleware = (req, res, next) => {
  // Regex for @gmail.com
  const emailRegex = /@gmail.com$/;

  const { username } = req.body;

  try {
    if (!emailRegex.test(username)) {
      res.status(403).send("403 Error: Email must end with @gmail.com");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { checkEmailMiddleware };
