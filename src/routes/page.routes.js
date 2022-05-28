"use strict";
const { Router } = require("express");
const multer = require("multer");
const multerConfig = require("../../config/multer");
const ProductController = require("../controllers/ProductController");

const router = Router();
const upload = multer(multerConfig);

router.get("/", async (request, response) => response.render("pages/home"));

router.get("/produtos", async (request, response) =>
  response.render("pages/produtos")
);

router.get("/cadastro-produtos", async (request, response) =>
  response.render("pages/cadastro-produtos")
);

router.post(
  "/cadastro-produtos",
  upload.single("file"),
  ProductController.createProduct
);

router.get("/perfil-usuario", async (request, response) =>
  response.render("pages/perfil")
);

router.get("/lista-de-produtos", ProductController.listProducts);

router.get("/login", async (request, response) =>
  response.render("pages/login")
);

router.get("/novo-cadastro", async (request, response) =>
  response.render("pages/novo-cadastro")
);

router.get("/politicas-de-privacidade", async (request, response) =>
  response.render("pages/politicas-de-privacidade")
);

router.get("/sobre-nos", async (request, response) =>
  response.render("pages/sobre-nos")
);

router.get("/termos-e-condicoes", async (request, response) =>
  response.render("pages/termos-e-condicoes")
);

module.exports = router;
