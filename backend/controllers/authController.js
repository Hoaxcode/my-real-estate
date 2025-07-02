const UserModel = require("../models/userModel");

//=> POST : Creates a new user
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new UserModel({ username, email, password });
  await newUser.save();
  res.status(201).json("User created successfully");
};

module.exports = signup;
