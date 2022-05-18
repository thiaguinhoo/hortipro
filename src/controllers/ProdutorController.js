const ProductorService = require("../services/ProductorService");
const Produtor = require("../database/models/Produtor");

const productorController = {
  create: async (req, res) => {
    const {
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
    } = req.body;

    // try {
    if (await Produtor.findOne({ where: { cpf: cpf } }))
      return res.status(400).send({ error: "User cpf already exists" });

    const produtor = await ProductorService.createProductor(
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
    );

    return res.send({
      produtor,
    });
    // } catch (err) {
    //   return res.status(400).send({ error: "Registration failed" });
    // }
  },
};

module.exports = productorController;
