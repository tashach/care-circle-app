const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    default: "",
  },
  isComplete: {
    type: "Boolean",
    default: false,
  },
  volunteerName: {
    type: "String",
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
