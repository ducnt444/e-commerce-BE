const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const tasksController = require("../controllers/tasksController");
const usersController = require("../controllers/usersController");

// AUTH routes
router.post("/login", authController.login);

// USER routes
router.put("/users/:id/change-password", usersController.changePassowrd);
router.get("/users/:id", usersController.getSingleUser);
router.get("/users/:id/tasks", usersController.getTasks);

// TASK routes
router.post("/add-task", tasksController.addTask);

module.exports = router;
