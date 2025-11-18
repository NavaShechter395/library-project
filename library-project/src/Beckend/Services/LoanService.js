// services/LoanService.js
const Loan = require("../Models/LoanModel");
const User = require("../Models/UserModel");
const Book = require("../Models/BookModel");

class LoanService {
  // יצירת השאלה חדשה
  static async createLoan(data) {
    return await Loan.create(data);
  }

  // החזרת כל ההשאלות
  static async getAllLoans() {
    return await Loan.findAll({
      include: [User, Book], // מציג גם את פרטי המשתמש והספר
    });
  }

  // השאלה לפי ID
  static async getLoanById(id) {
    return await Loan.findByPk(id, {
      include: [User, Book],
    });
  }

  // עדכון השאלה
  static async updateLoan(id, data) {
    const loan = await Loan.findByPk(id);
    if (!loan) return null;

    return await loan.update(data);
  }

  // מחיקת השאלה
  static async deleteLoan(id) {
    const loan = await Loan.findByPk(id);
    if (!loan) return null;

    await loan.destroy();
    return true;
  }
}

module.exports = LoanService;
