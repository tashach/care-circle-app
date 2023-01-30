const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  inviteCode: {
    type: "String",
  },
  tasks: [],
  circle: [],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
