const { DataTypes, Model } = require("sequelize");

class ProductModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 3],
              msg: "O nome da fruta deve conter mais de 3 caracteres",
            },
          },
        },
        preco: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            min: 0,
          },
        },
      },
      { sequelize, tableName: "PRODUCT" }
    );
  }
}

module.exports = ProductModel;
