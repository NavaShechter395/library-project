// controllers/BookController.js
const BookService = require("../Services/BookService");

class BookController {
  // יצירת ספר חדש
  static async create(req, res) {
    try {
      const book = await BookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // קבלת כל הספרים
  static async getAll(req, res) {
    try {
      const books = await BookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // קבלת ספר לפי ID
  static async getById(req, res) {
    try {
      const book = await BookService.getBookById(req.params.id);
      if (!book)
        return res.status(404).json({ error: "ספר לא נמצא" });

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // עדכון ספר
  static async update(req, res) {
    try {
      const book = await BookService.updateBook(req.params.id, req.body);
      if (!book)
        return res.status(404).json({ error: "ספר לא נמצא" });

      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // מחיקת ספר
  static async delete(req, res) {
    try {
      const success = await BookService.deleteBook(req.params.id);
      if (!success)
        return res.status(404).json({ error: "ספר לא נמצא" });

      res.json({ message: "הספר נמחק בהצלחה" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;
