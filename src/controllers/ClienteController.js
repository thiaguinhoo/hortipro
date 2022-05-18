const ClientService = require("../services/ClientService");
const Client = require("../database/models/Cliente");

const clientController = {
  create: async (req, res) => {
    const {
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
      id_usuario,
      id_cliente,
      id_endereco,
    } = req.body;

    try {
      if (await Client.findOne({ where: { cpf: cpf } }))
        return res.status(400).send({ error: "User cpf already exists" });
      if (await Client.findOne({ where: { id_cliente: id_cliente } }))
        return res.status(400).send({ error: "Client id already exists" });

      const cliente = await ClientService.createClient(
        cpf,
        nome,
        sobrenome,
        telefone,
        celular,
        id_usuario,
        id_cliente,
        id_endereco
      );

      return res.send({
        cliente,
      });
    } catch (error) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },
};

module.exports = clientController;
