"use strict";
const { Router } = require("express");

const productorController = require("../controllers/ProdutorController");

const router = Router();

router.route("/").post(productorController.create);

module.exports = router;
