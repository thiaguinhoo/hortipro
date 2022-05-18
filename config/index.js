"use strict";

const path = require("path");
const router = require("../src/routes/users.routes");

const rootDir = path.resolve(__dirname);
const publicDir = path.join(rootDir, "../public");

router.get("/", function (req, res) {
  res.sendFile("home.html", { root: publicDir });
});

router.get("/cadastro", (req, res) => {
  res.sendFile("Novo-cadastro.html", { root: publicDir });
});

module.exports = { rootDir, publicDir };
