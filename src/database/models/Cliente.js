const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class ClienteModel extends Model {}

ClienteModel.init(
  {
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    id_endereco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, tableName: "CLIENTE", timestamps: false }
);

module.exports = ClienteModel;
