// controllers/LoanController.js
const LoanService = require("../Services/LoanService");

class LoanController {
  // יצירת השאלה
  static async create(req, res) {
    try {
      const loan = await LoanService.createLoan(req.body);
      res.status(201).json(loan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // כל ההשאלות
  static async getAll(req, res) {
    try {
      const loans = await LoanService.getAllLoans();
      res.json(loans);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // השאלה לפי ID
  static async getById(req, res) {
    try {
      const loan = await LoanService.getLoanById(req.params.id);
      if (!loan) return res.status(404).json({ error: "השאלה לא נמצאה" });

      res.json(loan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // עדכון השאלה
  static async update(req, res) {
    try {
      const loan = await LoanService.updateLoan(req.params.id, req.body);
      if (!loan) return res.status(404).json({ error: "השאלה לא נמצאה" });

      res.json(loan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // מחיקה
  static async delete(req, res) {
    try {
      const success = await LoanService.deleteLoan(req.params.id);
      if (!success) return res.status(404).json({ error: "השאלה לא נמצאה" });

      res.json({ message: "ההשאלה נמחקה בהצלחה" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LoanController;
