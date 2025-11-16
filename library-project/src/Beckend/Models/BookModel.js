// BookModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Book = sequelize.define("Book", {
    //מזהה
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  //שם הספר
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //מחברת
  author: {
    type: DataTypes.STRING,
  },
  //שנת הוצאה
  publishYear: {
    type: DataTypes.INTEGER,
  },
 // סוג הספר
  genre: {
    type: DataTypes.STRING,
  },
  //מספר עותקים זמינים
  availableCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Book;
