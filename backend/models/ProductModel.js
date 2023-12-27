import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataType } = Sequelize;

const Product = db.define(
  "product",
  {
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    type: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    brand: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    price: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stock: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Product;
