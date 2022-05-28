const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class ProdutorModel extends Model {}

ProdutorModel.init(
  {
    id_produtor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [14, 14],
          msg: "CPF deve ter 14 caracteres",
        },
      },
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Nome deve ter entre 3 e 255 caracteres",
        },
      },
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Sobrenome deve ter entre 3 e 255 caracteres",
        },
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [14, 15],
          msg: "Telefone deve ter entre 14 e 15 caracteres",
        },
      },
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [15, 15],
          msg: "Celular deve ter 15 caracteres",
        },
      },
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: {
          args: [1, 11],
          msg: "ID_ENDERECO deve ter entre 1 e 11 caracteres",
        },
      },
    },
  },
  { sequelize, tableName: "PRODUTOR", timestamps: false }
);

module.exports = ProdutorModel;
