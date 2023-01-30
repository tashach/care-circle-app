const User = require("../models/user");
const Task = require("../models/task");
const Member = require("../models/member");

const { rawListeners, db } = require("../models/user");
var ObjectId = require("mongodb").ObjectId;

exports.getAllUsers = (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

exports.getOneUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

exports.postCreateUser = (req, res) => {
  User.create(req.body)
    .then((data) => res.json({ message: "User added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add user", error: err.message })
    );
};

exports.putUpdateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update user", error: err.message })
    );
};

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    // User.deleteMany()
    .then((data) => res.json({ message: "User deleted successfully", data }))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

exports.getTask = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user.tasks))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};

exports.getCircle = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user.circle))
    .catch((err) =>
      res.status(404).json({ message: "User not found", error: err.message })
    );
};
// ---------------------------- Task Routes --------------------- //
exports.addTask = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save();

  User.findByIdAndUpdate(
    req.params.id,
    { $push: { tasks: newTask } },
    { new: true, upsert: true },
    (err) => {
      if (err) {
        res.status(400).json({ message: "error" });
      }

      res.json({
        message: `successfully added task ${newTask.title}`,
        _id: newTask._id,
      });
    }
  );
};

exports.updateTask = (req, res) => {
  const taskId = new ObjectId(req.body._id);
  User.updateOne(
    { _id: req.params.id, "tasks._id": taskId },
    {
      $set: {
        "tasks.$.volunteerName": req.body.volunteerName,
        "tasks.$.title": req.body.title,
        "tasks.$.description": req.body.description,
        "tasks.$.isComplete": req.body.isComplete,
      },
    }
  )
    .then(() =>
      res.json({
        message: `successfully updated task ${req.body.title}`,
      })
    )
    .catch((err) =>
      res.status(400).json({ message: "task not updated", error: err.message })
    );
};

exports.deleteTask = (req, res) => {
  const taskId = new ObjectId(req.params.taskId);
  User.findByIdAndUpdate(
    req.params.id,
    { $pull: { tasks: { _id: taskId } } },
    { safe: true, multi: false }
  )
    .then(() =>
      res.json({
        message: `successfully deleted task with id ${taskId}`,
      })
    )
    .catch((err) =>
      res.status(400).json({ message: "task not deleted", error: err.message })
    );
};
// ------------------------- Member Routes ---------------------- //
exports.addMember = (req, res) => {
  const newMember = new Member(req.body);
  newMember.save();

  User.findByIdAndUpdate(
    req.params.id,
    { $push: { circle: newMember } },
    { new: true, upsert: true },
    (err) => {
      if (err) {
        res.status(400).json({ message: "error" });
      }

      res.json({
        message: `successfully added circle member ${newMember.memberFirstName}`,
        _id: newMember._id,
      });
    }
  );
};

exports.deleteMember = (req, res) => {
  const memberId = new ObjectId(req.params.memberId);
  User.findByIdAndUpdate(
    req.params.id,
    { $pull: { circle: { _id: memberId } } },
    { safe: true, multi: false }
  )
    .then(() =>
      res.json({
        message: `successfully removed circle member ${memberId}`,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Circle member not deleted", error: err.message })
    );
};

exports.updateMember = (req, res) => {
  const memberId = new ObjectId(req.body._id);
  User.updateOne(
    { _id: req.params.id, "circle._id": memberId },
    {
      $set: {
        "circle.$.memberFirstName": req.body.memberFirstName,
        "circle.$.memberLastName": req.body.memberLastName,
        "circle.$.memberEmail": req.body.memberEmail,
        "circle.$.memberPhone": req.body.memberPhone,
        "circle.$.tasks": req.body.tasks,
      },
    }
  )
    .then(() =>
      res.json({
        message: `successfully updated circle member data ${req.body}`,
      })
    )
    .catch((err) =>
      res.status(400).json({ message: "task not updated", error: err.message })
    );
};
