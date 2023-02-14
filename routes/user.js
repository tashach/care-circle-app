// router/todo.js
const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  login,
  postCreateUser,
  putUpdateUser,
  deleteUser,
  addTask,
  deleteTask,
  updateTask,
  addMember,
  loginMember,
  deleteMember,
  updateMember,
} = require("../controllers/user");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

router.post("/login", login);
router.post("/", postCreateUser);
router.put("/:id", putUpdateUser);
router.delete("/:id", deleteUser);

router.post("/task/:id", addTask);
router.delete("/task/:id/:taskId", deleteTask);
router.put("/task/:id", updateTask);

router.post("/circle/:id", addMember);
router.post("/guestlogin", loginMember);
router.delete("/circle/:id/:memberId", deleteMember);
router.put("/circle/:id", updateMember);

module.exports = router;
