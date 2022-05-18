"use strict";
const config = require(__dirname + "/../config/config");
const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize({
  dialect: config.dialect,
  database: config.database,
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
