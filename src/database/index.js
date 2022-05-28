const Sequelize = require("sequelize");
require("./models/Produtor");
require("./models/Cliente");
require("./models/Usuario");
require("./models/Product");
const databaseConfig = require("./config/config");

const connection = new Sequelize(databaseConfig);

module.exports = connection;
