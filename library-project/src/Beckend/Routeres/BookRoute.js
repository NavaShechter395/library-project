// routes/bookRoutes.js
const express = require("express");
const router = express.Router();
const BookController = require("../Controllers/BookController");

router.post("/", BookController.create);
router.get("/", BookController.getAll);
router.get("/:id", BookController.getById);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

module.exports = router;
