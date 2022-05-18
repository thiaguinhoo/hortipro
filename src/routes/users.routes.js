const { Router } = require("express");
const userController = require("../controllers/UserController");
const clientController = require("../controllers/ClienteController");
const productorController = require("../controllers/ProdutorController");

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/cadastro", userController.create);
router.post("/cadastro/cliente", clientController.create);
router.post("/cadastro/produtor", productorController.create);

router.delete("/usuarios/:id", userController.delete);

router.post("/logar", userController.logar);

router.post("/finalizacao-compra", (req, res) => {
  res.render("finalizacao-compra");
});

module.exports = router;
