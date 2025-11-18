// services/LibrarianService.js
const Librarian = require("../Models/LibrarianModel");

class LibrarianService {
  // יצירת ספרן חדש
  static async createLibrarian(data) {
    return await Librarian.create(data);
  }

  // הבאת כל הספרנים
  static async getAllLibrarians() {
    return await Librarian.findAll();
  }

  // הבאת ספרן לפי ID
  static async getLibrarianById(id) {
    return await Librarian.findByPk(id);
  }

  // עדכון ספרן
  static async updateLibrarian(id, data) {
    const librarian = await Librarian.findByPk(id);
    if (!librarian) return null;

    return await librarian.update(data);
  }

  // מחיקת ספרן
  static async deleteLibrarian(id) {
    const librarian = await Librarian.findByPk(id);
    if (!librarian) return null;

    await librarian.destroy();
    return true;
  }
}

module.exports = LibrarianService;
