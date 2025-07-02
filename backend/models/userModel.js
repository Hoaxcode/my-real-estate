const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required !"],
      unique: [true, "user name must be unique !"],
      trim: true,
      minlength: [1, "too short user name !"],
      maxlength: [35, "too long user name !"],
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
