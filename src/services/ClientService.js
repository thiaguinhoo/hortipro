const Cliente = require("../database/models/Cliente");

const ClientService = {
  createClient: async (
    cpf,
    nome,
    sobrenome,
    telefone,
    celular,
    id_usuario,
    id_cliente,
    id_endereco
  ) => {
    const newClient = await Cliente.create({
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
      id_usuario,
      id_cliente,
      id_endereco,
    });

    return newClient;
  },
};

module.exports = ClientService;
