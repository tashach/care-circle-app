const User = require("../models/user");
const Task = require("../models/task");
const Member = require("../models/member");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
var ObjectId = require("mongodb").ObjectId;

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateString = (length) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

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

exports.postCreateUser = asyncHandler(async (req, res) => {
  console.log("calling create user");
  const inviteCode = generateString(6);
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    res.status(400).json({ message: "User Already Exists" });
    throw new Error("User Already Exists");
  }
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      inviteCode: inviteCode,
    });
    user.save();
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      token: token,
      inviteCode: user.inviteCode,
      circle: [],
      tasks: [],
    });
  } catch (error) {
    res.status(500).json({ msg: "error, user not created" });
  }
});

exports.login = asyncHandler(async (req, res) => {
  console.log("request body", req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      token: token,
      circle: user.circle,
      tasks: user.tasks,
      inviteCode: user.inviteCode,
    });
  } else {
    res.status(400).json({ message: "Incorrect email or password" });
    throw new Error("Incorrect email or password");
  }
});

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
        "tasks.$.date": req.body.date,
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
  console.log("callingAddMember");
  const newMember = new Member(req.body);
  newMember.save();

  User.findByIdAndUpdate(
    req.params.id,
    { $push: { circle: newMember } },
    { new: true, upsert: true },
    (err) => {
      if (err) {
        res.status(400).json({ message: "error" });
      } else {
        res.json({
          message: `successfully added circle member ${newMember.memberFirstName}`,
          _id: newMember._id,
        });
      }
    }
  );
};

exports.loginMember = asyncHandler(async (req, res) => {
  console.log("loginMember request body", req.body.email);
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user && (await user.matchInviteCode(req.body.inviteCode))) {
    res.json({
      _id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      circle: user.circle,
      tasks: user.tasks,
      inviteCode: user.inviteCode,
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
    throw new Error("Incorrect email or password");
  }
});

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
