"use strict";
const ProductService = require("../services/ProductService");

const productController = {
  async listProducts(_, response) {
    const products = await ProductService.listProducts();
    response.render("pages/lista-de-produtos", products);
  },

  async createProduct(request, response) {
    try {
      await ProductService.createProduct(request.body, request.file);
      response.render("pages/cadastro-produtos");
    } catch (err) {
      response.render("pages/cadastro-produtos");
    }
  },
};

module.exports = productController;
