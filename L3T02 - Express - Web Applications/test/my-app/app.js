const express = require("express");

const app = express();
app.use(express.static("public"));
console.log("The value of process.env is:", process.env);
app.get("/", function (req, res) {
  res.send("Hello World!");
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
