// router/todo.js
const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getOneUser,
  postCreateUser,
  putUpdateUser,
  deleteUser,
  getTask,
  getCircle,
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
 * @description get one user
 * @access public
 */
router.get("/:id", getOneUser);

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

/**
 * @route GET /user/:id/task
 * @description get tasks for one user
 * @access public
 */
router.get("/:id/task", getTask);

/**
 * @route GET /user/:id/member
 * @description get members for one user
 * @access public
 */
router.get("/:id/circle", getCircle);

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
