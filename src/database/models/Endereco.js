const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../models");

class EnderecoModel extends Model {}

EnderecoModel.init(
  {
    id_endereco: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: "ENDERECO", timestamps: false }
);

EnderecoModel.sync({ alter: true });

module.exports = EnderecoModel;
