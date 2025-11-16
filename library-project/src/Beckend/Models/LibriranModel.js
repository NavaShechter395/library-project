const Librarian = sequelize.define("Librarian", {
    //מזהה
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    //שם
    name: { type: DataTypes.STRING, allowNull: false },
    //מייל
    email: { type: DataTypes.STRING, unique: true },
    //סיסמא
    password: { type: DataTypes.STRING, allowNull: false },
  });
  