// LoanModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./UserModel");
const Book = require("./BookModel");

const Loan = sequelize.define("Loan", {
    //מזהה השאלה
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
 // תאריך השאלה
  loanDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  //תאריך החזרה
  returnDate: {
    type: DataTypes.DATE,
  },
  //האם הוחזר
  isReturned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

User.hasMany(Loan);
Loan.belongsTo(User);

Book.hasMany(Loan);
Loan.belongsTo(Book);

module.exports = Loan;
