const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is required !"],
      unique: [true, "user name must be unique !"],
      trim: true,
      minlength: [3, "too short user name !"],
      maxlength: [32, "too long user name !"],
    },
    email: {
      type: String,
      required: [true, "user email is required !"],
      unique: [true, "user email must be unique !"],
    },
    password: {
      type: String,
      required: [true, "user password is required !"],
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
