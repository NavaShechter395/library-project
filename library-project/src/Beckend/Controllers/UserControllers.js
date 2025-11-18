// controllers/UserController.js
const UserService = require("../Services/UserService");

class UserController {
  // יצירה
  static async create(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // כל המשתמשים
  static async getAll(req, res) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // לפי מזהה
  static async getById(req, res) {
    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: "משתמש לא נמצא" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // עדכון
  static async update(req, res) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      if (!user) return res.status(404).json({ error: "משתמש לא נמצא" });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // מחיקה
  static async delete(req, res) {
    try {
      const success = await UserService.deleteUser(req.params.id);
      if (!success) return res.status(404).json({ error: "משתמש לא נמצא" });

      res.json({ message: "המשתמש נמחק בהצלחה" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
