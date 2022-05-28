const UserService = require("../services/UserService");
const EnderecoService = require("../services/EnderecoService");
const ProductorService = require("../services/ProductorService");
const ClientService = require("../services/ClientService");
const database = require("../database/models");
const { deleteUser } = require("../services/UserService");
const User = require("../database/models/Usuario");

const userController = {
  create: async (req, res) => {
    const { email, senha, ativo, catalogo_oferta, termo_de_aceite } = req.body;

    try {
      if (await User.findOne({ where: { email: email } }))
        return res.status(400).send({ error: "User email already exists" });

      const usuario = await UserService.createUser(
        email,
        senha,
        ativo,
        catalogo_oferta,
        termo_de_aceite
      );

      return res.send({
        usuario,
      });
    } catch (err) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    if (
      await User.findOne({
        where: {
          id_usuario: id,
        },
      })
    ) {
      const user = await deleteUser(id);
      return res.send({ msg: `User deleted` });
    }

    return res.send({ msg: "User not found" });
  },

  signIn: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await UserService.getUserByLogin(email);

    if (usuario === null) {
      return res.render("pages/login");
    } else {
      if (
        (req.body.email == usuario.email) &
        (req.body.senha == usuario.senha)
      ) {
        return res.render("pages/home");
      } else {
        return res.render("pages/login");
      }
    }
  },

  register: async (req, res) => {
    const { usuario_tipo, email, cpf, name, last_name, 
      password, passconfirmation, phone, cell_phone, local_city,
      uf, local_street, local_cep, agreement
    } = req.body;

    const termo_de_aceite = agreement[0] == "on" ? true : false;
    const catalogo_oferta = agreement[1] == "on" ? true : false;
    
    if (password != passconfirmation){
      res.send(msg, "Senha não é igual a confirmação da senha!")  
    }
    
    const usuario = await UserService.createUser(email, password, true, catalogo_oferta, termo_de_aceite)
    
    const endereco = await EnderecoService.createEndereco(local_city, uf, local_street, local_cep)

    if (usuario_tipo == "produtor"){
      const produtor = await ProductorService.createProductor(
        cpf,
        name,
        last_name,
        phone,
        cell_phone,
        endereco.id_endereco,
        usuario.id_usuario
      );
    } else {
      const cliente = await ClientService.createClient(
        cpf,
        name,
        last_name,
        phone,
        cell_phone,
        usuario.id_usuario,
        endereco.id_endereco
      );
    }

    return res.render("pages/login");
   
  },
};

module.exports = userController;