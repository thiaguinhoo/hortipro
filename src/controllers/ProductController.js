"use strict";
const ProductService = require("../services/ProductService");

const productController = {
  async listProducts(req, res) {
    const products = await ProductService.listProducts();
    res.render("pages/lista-de-produtos", products);
  },
};

module.exports = productController;
