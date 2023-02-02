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
  deleteMember,
  updateMember,
} = require("../controllers/user");

/**
 * @route GET /user
 * @description get all users
 * @access public
 */
router.get("/", getAllUsers);

/**
 * @route GET /user/:id
 * @description getOneUser
 * @access public
 */
router.get("/:id", getOneUser);

/**
 * @route POST /user/login
 * @description login
 * @access public
 */
router.post("/login", login);

/**
 * @route POST /user
 * @description create new user
 * @access public
 */
router.post("/", postCreateUser);

/**
 * @route PUT /user/:id
 * @description update user
 * @access public
 */
router.put("/:id", putUpdateUser);

/**
 * @route DELETE /user/:id
 * @description delete user
 * @access public
 */
router.delete("/:id", deleteUser);
// router.delete("/", deleteUser);

/**
 * @route POST /task/:id
 * @description add task to user
 * @access public
 */
router.post("/task/:id", addTask);

/**
 * @route DELETE /user/:id
 * @description delete task
 * @access public
 */
router.delete("/task/:id/:taskId", deleteTask);

/**
 * @route PUT /user/task/:id
 * @description Update a task
 */
router.put("/task/:id", updateTask);

/**
 * @route POST /circle/:id
 * @description add member to user
 * @access public
 */
router.post("/circle/:id", addMember);

/**
 * @route DELETE /circle/:id
 * @description delete task
 * @access public
 */
router.delete("/circle/:id/:memberId", deleteMember);

/**
 * @route PUT /user/circle/:id
 * @description Update a task
 */
router.put("/circle/:id", updateMember);

module.exports = router;
