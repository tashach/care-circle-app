const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
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
      unique: true,
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
  },
  {
    methods: {
      matchPassword: async function (enteredPassword) {
        return enteredPassword === this.password;
      },
      matchInviteCode: async function (enteredCode) {
        return enteredCode === this.inviteCode;
      },
    },
  }
);

// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return enteredPassword === this.password;
// };

// UserSchema.methods.matchInviteCode = async function (enteredCode) {
//   return enteredCode === this.inviteCode;
// };

const User = mongoose.model("User", UserSchema);

module.exports = User;
