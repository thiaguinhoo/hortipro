"use strict";
require("dotenv").config();
const routes = require("express").Router();
require("./database");

const app = require("./app");
const logger = require("./utils/logger");

app.use(routes);

const SERVER_PORT = process.env.SERVER_PORT || 3333;

app.listen(SERVER_PORT, () =>
  logger.info(`Server running on *:${SERVER_PORT}`)
);
