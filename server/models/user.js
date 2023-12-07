// user.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FullName: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Photo: {
    type: DataTypes.STRING,
  },
  Phone: {
    type: DataTypes.STRING,
  },
  CompanyId: {
    type: DataTypes.INTEGER,
    foreignKey:true
  },
});

export default User;
