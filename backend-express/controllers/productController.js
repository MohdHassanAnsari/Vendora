const UserDetailsModel = require("../models/usersModel"); // Import the Mongoose model

const getAllUserDetails = async (req, res) => {
  try {
    const userDetailsList = await UserDetailsModel.find({}).limit(10);
    res.status(200).json({ result: userDetailsList });
  } catch (err) {
    return res.status(500).json({ result: err.message });
  }
};

module.exports = {
  getAllUserDetails,
};
