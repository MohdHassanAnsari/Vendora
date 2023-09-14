const mongoose = require("mongoose");

// Define the schema for the "user_details" collection
const userSchema = new mongoose.Schema({
  title: String,
  description: String,
  picture: String,
});

// Create a Mongoose model for the "user_details" collection
const UserDetailsModel = mongoose.model("user_details", userSchema);

module.exports = UserDetailsModel;
