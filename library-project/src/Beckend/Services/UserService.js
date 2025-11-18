// services/UserService.js
const User = require("../Models/UserModel");

class UserService {
  // יצירת משתמש חדש
  static async createUser(data) {
    return await User.create(data);
  }

  // הבאת כל המשתמשים
  static async getAllUsers() {
    return await User.findAll();
  }

  // הבאת משתמש לפי מזהה
  static async getUserById(id) {
    return await User.findByPk(id);
  }

  // עדכון משתמש
  static async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (!user) return null;

    return await user.update(data);
  }

  // מחיקת משתמש
  static async deleteUser(id) {
    const user = await User.findByPk(id);
    if (!user) return null;

    await user.destroy();
    return true;
  }
}

module.exports = UserService;
