const Productor = require("../database/models/Produtor");

const ProductorService = {
  createProductor: async (
    cpf,
    nome,
    sobrenome,
    telefone,
    celular,
    id_endereco,
    id_usuario
  ) => {
    const newProductor = await Productor.create({
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
      id_endereco,
      id_usuario
    });
    return newProductor;
  },
};

module.exports = ProductorService;
