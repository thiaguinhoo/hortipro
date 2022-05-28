const { sequelize } = require("../database/models");

const getProducts = async (type) => {
  return sequelize.query(
    `
    SELECT * FROM PRODUCT
      WHERE type = :type
  `,
    {
      replacements: { type },
      type: sequelize.QueryTypes.SELECT,
    }
  );
};

const ProductService = {
  createProduct: async (data, file) => {
    data = {
      ...data,
      quantity: +data.quantity,
      price: +data.price,
      photo: file.filename,
    };
    await sequelize.query(
      `
      INSERT INTO PRODUCT (name, type, local, quantity, price, description, photo)
        VALUES (:name, :type, :local, :quantity, :price, :description, :photo)
      `,
      {
        replacements: data,
        type: sequelize.QueryTypes.INSERT,
      }
    );
    return [];
  },

  listProducts: async () => {
    const horta = await getProducts("horta");
    const mercearia = await getProducts("mercearia");
    return {
      horta,
      mercearia,
    };
  },
};

module.exports = ProductService;
