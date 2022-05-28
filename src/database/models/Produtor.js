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
      type: DataTypes.STRING,
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
    id_endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 11],
          msg: "ID_ENDERECO deve ter entre 1 e 11 caracteres",
        },
      },
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 255],
          msg: "Rua deve ter entre 3 e 255 caracteres",
        },
      },
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 8],
          msg: "CEP deve ter 8 caracteres",
        },
      },
    },
  },
  { sequelize, tableName: "PRODUTOR", timestamps: false }
);

module.exports = ProdutorModel;
