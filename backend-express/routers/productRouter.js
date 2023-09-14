const getAllUserDetails = require("../controllers/productController");
const express = require("express");

const productsRoutes = express.Router();
productsRoutes.get("/products", getAllUserDetails.getAllUserDetails);

module.exports = productsRoutes;
