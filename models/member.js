const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  memberFirstName: {
    type: "String",
    required: true,
  },
  memberLastName: {
    type: "String",
    required: true,
  },
  memberEmail: {
    type: "String",
    required: true,
  },
  memberPhone: {
    type: "String",
    default: "",
  },
  tasks: [],
});

const Member = mongoose.model("member", MemberSchema);

module.exports = Member;
