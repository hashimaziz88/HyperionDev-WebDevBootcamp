// backend/middleware/checkEmailMiddleware

const checkEmailMiddleware = (req, res, next) => {
  // Regex for @gmail.com
  const emailRegex = /@gmail.com$/;

  const { username } = req.body;

  try {
    if (!emailRegex.test(username)) {
      res.status(403).send({ message: "403 Error Email must @gmail.com" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { checkEmailMiddleware };
