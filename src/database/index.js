const Sequelize = require("sequelize");
const Produtor = require("./models/Produtor");
const Cliente = require("./models/Cliente");
const Usuario = require("./models/Usuario");
const Product = require("./models/Product");
const databaseConfig = require("./config/config");

const models = [Usuario, Cliente, Produtor, Product];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

module.exports = connection;
