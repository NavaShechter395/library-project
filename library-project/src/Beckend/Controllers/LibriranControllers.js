// controllers/LibrarianController.js
const LibrarianService = require("../Services/LibrarianService");

class LibrarianController {
  // יצירת ספרן
  static async create(req, res) {
    try {
      const librarian = await LibrarianService.createLibrarian(req.body);
      res.status(201).json(librarian);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // כל הספרנים
  static async getAll(req, res) {
    try {
      const librarians = await LibrarianService.getAllLibrarians();
      res.json(librarians);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // ספרן לפי ID
  static async getById(req, res) {
    try {
      const librarian = await LibrarianService.getLibrarianById(req.params.id);
      if (!librarian)
        return res.status(404).json({ error: "ספרן לא נמצא" });

      res.json(librarian);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // עדכון ספרן
  static async update(req, res) {
    try {
      const librarian = await LibrarianService.updateLibrarian(
        req.params.id,
        req.body
      );

      if (!librarian)
        return res.status(404).json({ error: "ספרן לא נמצא" });

      res.json(librarian);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // מחיקת ספרן
  static async delete(req, res) {
    try {
      const success = await LibrarianService.deleteLibrarian(req.params.id);
      if (!success)
        return res.status(404).json({ error: "ספרן לא נמצא" });

      res.json({ message: "הספרן נמחק בהצלחה" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LibrarianController;
