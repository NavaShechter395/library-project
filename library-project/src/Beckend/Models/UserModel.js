// UserModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
    //מזהה
  id: {
    //מסוג שלם
    type: DataTypes.INTEGER,
    //מפתח ראשי
    primaryKey: true,
    //המזהה נוצר אוטומטית
    autoIncrement: true,
  },
  //שם פרטי
  firstName: {
    type: DataTypes.STRING,
    //חובה להזין ערך
    allowNull: false,
  },
  //שם משפחה
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 // עיר
  city: {
    type: DataTypes.STRING,
  },
  //רחוב
  street: {
    type: DataTypes.STRING,
  },
  //האם פעיל
  isActive: {
    type: DataTypes.BOOLEAN,
    //הברירית מחדל -פעיל
    defaultValue: true,
  },
  //תאריך הצטרפות
  joinDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  //תאריך סוף המנוי
  membershipEndDate: {
    type: DataTypes.DATE,
  },
});

module.exports = User;
