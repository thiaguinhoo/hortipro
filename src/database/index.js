const Sequelize = require("sequelize");
const Produtor = require("./models/Produtor");
const Cliente = require("./models/Cliente");
const Usuario = require("./models/Usuario");
const databaseConfig = require("./config/config");

const models = [Usuario, Cliente, Produtor];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

module.exports = connection;
