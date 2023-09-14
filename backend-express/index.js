const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.listen(port, () => {
  console.log(`\n listening on port \n ===> http://localhost:${port}/ \n`);
});
