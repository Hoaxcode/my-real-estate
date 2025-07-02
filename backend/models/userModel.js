const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required !"],
      unique: [true, "user must be unique !"],
      trim: true,
      minlength: [3, "too short user name !"],
      maxlength: [32, "too long user name !"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
