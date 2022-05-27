"use strict";
const clientController = require("../controllers/ClienteController");

const { Router } = require("express");

const router = Router();

router.route("/:id").post(clientController.create);

module.exports = router;
