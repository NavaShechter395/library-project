// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// יצירת משתמש
router.post("/", UserController.create);

// כל המשתמשים
router.get("/", UserController.getAll);

// משתמש לפי ID
router.get("/:id", UserController.getById);

// עדכון משתמש
router.put("/:id", UserController.update);

// מחיקה
router.delete("/:id", UserController.delete);

module.exports = router;
