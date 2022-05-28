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
          args: [11, 11],
          msg: "CPF deve ter 11 caracteres",
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
          args: [8, 8],
          msg: "Telefone deve ter entre 10 e 11 caracteres",
        },
      },
    },
    celular: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [10, 11],
          msg: "Celular deve ter entre 10 e 11 caracteres",
        },
      },
    },
    id_usuario: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    id_cliente: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    id_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 8],
          msg: "seu CEP deve ter 8 caracteres",
        },
      },
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
