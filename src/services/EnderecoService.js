const Endereco = require("../database/models/Endereco");

const EnderecoService = {
  createEndereco: async (
    municipio,
    uf,
    rua,
    cep,
  ) => {
    const newEndereco = await Endereco.create({
        municipio,
        uf,
        rua,
        cep,
    });

    return newEndereco;
  },
};

module.exports = EnderecoService;
