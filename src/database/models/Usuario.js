const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class UserModel extends Model {}

UserModel.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [3, 255],
          msg: "Seu email deve conter mais de 3 caracteres",
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [7, 255],
          msg: "Sua senha deve coonter 8 ou mais caracteres",
        },
      },
    },
  },
  { sequelize, tableName: "USUARIO", timestamps: false }
);

module.exports = UserModel;
