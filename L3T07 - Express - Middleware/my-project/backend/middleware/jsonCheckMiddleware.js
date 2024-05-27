const jsonCheckMiddleware = (req, res, next) => {
  // Determine the content type of the incoming request
  const contentType = req.get("Content-Type");

  // Reference for validating JSON content type:
  //   Gupta, Avani. "Use JSON content-type for key-values - Azure App Configuration."
  //   Microsoft Learn, https://learn.microsoft.com/en-us/azure/azure-app-configuration/howto-leverage-json-content-type#valid-json-content-type
  //   Accessed on: 25th May 2024.
  try {
    if (!contentType || !contentType.startsWith("application/json")) {
      res
        .status(400)
        .send({ message: "This site only accepts JSON requests!" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { jsonCheckMiddleware };
