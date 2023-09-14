const express = require("express");
const productsRoutes = require("./routers/productRouter");
const connectMDB = require("./config/db");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the actual origin of your frontend application
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials like cookies to be sent
  })
);

app.use("/", productsRoutes);

app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

app.listen(port, () => {
  console.log(`\n listening on port \n ===> http://localhost:${port}/`);
  connectMDB();
});
