import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CompanyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  CompanyLogo: {
    type: DataTypes.STRING,
  },
});

export default Company;
