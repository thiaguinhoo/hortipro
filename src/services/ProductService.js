const ProductModel = require("../database/models/Product");
const Product = require("../database/models/Product");

const ProductService = {
  createProduct: async (nome, preco, quantidade) => {
    const newProduct = await Product.create({
      nome,
      preco,
      quantidade,
    });

    return newProduct;
  },

  listProducts: async () => {
    // const products = {
    //   horta: [],
    //   mercearia: [],
    // };
    const products = await ProductModel;
    return products;
  },
};

module.exports = ProductService;
