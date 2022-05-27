"use strict";
const { Router } = require("express");
const ProductController = require("../controllers/ProductController");

const router = Router();

router.get("/", async (req, res) => res.render("pages/home"));

router.get("/produtos", async (req, res) => res.render("pages/produtos"));

router.get("/cadastro-produtos", async (req, res) =>
  res.render("pages/cadastro-produtos")
);

router.get("/perfil-usuario", async (req, res) => res.render("pages/perfil"));

router.get("/lista-de-produtos", ProductController.listProducts);

router.get("/login", async (req, res) => res.render("pages/login"));

router.get("/novo-cadastro", async (req, res) =>
  res.render("pages/novo-cadastro")
);

router.get("/politicas-de-privacidade", async (req, res) =>
  res.render("pages/politicas-de-privacidade")
);

router.get("/sobre-nos", async (req, res) => res.render("pages/sobre-nos"));

router.get("/termos-e-condicoes", async (req, res) =>
  res.render("pages/termos-e-condicoes")
);

module.exports = router;
