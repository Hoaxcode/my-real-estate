const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//=> POST : Creates a new user
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // to hash a password
  const newUser = new UserModel({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(500).json(error.message); // show the error message defiend in user schema in userModel
  }
};

module.exports = signup;
