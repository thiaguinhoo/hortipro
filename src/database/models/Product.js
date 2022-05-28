const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      // validate: {
      //   min: 0,
      // },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // validate: {
      //   min: 0,
      // },
    },
    local: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [100, 100],
        },
      },
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "PRODUCT", timestamps: false }
);

ProductModel.sync({ alter: true });

module.exports = ProductModel;
