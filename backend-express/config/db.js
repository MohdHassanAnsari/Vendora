const mongoose = require("mongoose");
require("dotenv").config();

const mongodbURL = process.env.MONGODB_URL || "";

const connectMDB = async () => {
  try {
    const client = await mongoose.connect(mongodbURL);
    console.log(` ===> Connected to MongoDB Successfully... \n`);
    return client;
  } catch (error) {
    console.log("This is error : ", error.message);
    setTimeout(connectMDB, 5000);
    throw error;
  }
};

module.exports = connectMDB;
