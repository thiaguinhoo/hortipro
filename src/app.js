"use strict";
const path = require("path");
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const { errors } = require("celebrate");

const userRoutes = require("./routes/users.routes");
const { publicDir } = require("../config");
const db = require("./database/models");

const app = express();

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(publicDir));

app.get("/", userRoutes);

app.get("/usuarios", async (req, res) => {
  const users = await db.sequelize.query("SELECT * FROM USUARIO");
  res.send(users);
});

app.use("/users", userRoutes);
app.post("/cadastro", userRoutes);
app.post("/cadastro/cliente", userRoutes);
app.post("/cadastro/produtor", userRoutes);
app.delete("/usuarios/:id", userRoutes);
app.get("/login", userRoutes);
app.post("/logar", userRoutes);
app.post("/finalizacao-compra", userRoutes);

app.use(errors());

app.use(async (err, req, res, next) => {
  res.json({ message: err.message });
});

module.exports = app;
