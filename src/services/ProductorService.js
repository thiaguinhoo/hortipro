const Productor = require("../database/models/Produtor");

const ProductorService = {
  createProductor: async (
    cpf,
    nome,
    sobrenome,
    telefone,
    celular,
    id_endereco,
    id_usuario,
    id_produtor,
    rua,
    cep
  ) => {
    const newProductor = await Productor.create({
      cpf,
      nome,
      sobrenome,
      telefone,
      celular,
      id_endereco,
      id_usuario,
      id_produtor,
      rua,
      cep,
    });
    return newProductor;
  },
};

module.exports = ProductorService;
