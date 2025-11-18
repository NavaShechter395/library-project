// services/BookService.js
const Book = require("../Models/BookModel");

class BookService {
  // יצירת ספר חדש
  static async createBook(data) {
    return await Book.create(data);
  }

  // הבאת כל הספרים
  static async getAllBooks() {
    return await Book.findAll();
  }

  // הבאת ספר לפי ID
  static async getBookById(id) {
    return await Book.findByPk(id);
  }

  // עדכון ספר
  static async updateBook(id, data) {
    const book = await Book.findByPk(id);
    if (!book) return null;

    return await book.update(data);
  }

  // מחיקת ספר
  static async deleteBook(id) {
    const book = await Book.findByPk(id);
    if (!book) return null;

    await book.destroy();
    return true;
  }
}

module.exports = BookService;
