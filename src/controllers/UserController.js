const UserService = require("../services/UserService");
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

  logar: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await UserService.getUserByLogin(email);

    if (usuario === null) {
      return res.render("login");
      //res.json({ msg: 'Login ou Senha invalida(o)!' });
    } else {
      if (
        (req.body.email == usuario.email) &
        (req.body.senha == usuario.senha)
      ) {
        return res.render("finalizacao-compra");
        //return res.json({ msg: `Seja Bem Vindo ${usuario.email}` });
      } else {
        return res.render("login"); //res.json({ msg: 'Login ou Senha invalida(o)!' });
      }
    }
  },
};

module.exports = userController;
