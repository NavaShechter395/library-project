// routes/librarianRoutes.js
const express = require("express");
const router = express.Router();
const LibrarianController = require("../Controllers/LibrarianController");

router.post("/", LibrarianController.create);
router.get("/", LibrarianController.getAll);
router.get("/:id", LibrarianController.getById);
router.put("/:id", LibrarianController.update);
router.delete("/:id", LibrarianController.delete);

module.exports = router;
