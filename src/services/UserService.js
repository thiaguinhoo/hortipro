const User = require("../database/models/Usuario");
const { Op } = require("sequelize");

const UserService = {
  createUser: async (email, senha, ativo, catalogo_oferta, termo_de_aceite) => {
    const newUser = await User.create({
      email,
      senha,
      ativo,
      catalogo_oferta,
      termo_de_aceite,
    });

    return newUser;
  },

  deleteUser: async (id) => {
    const user = await User.destroy({
      where: {
        id_usuario: id,
      },
    });
    return user;
  },

  getUserByLogin: async (email) => {
    const user = await User.findOne({
      where: {
        [Op.and]: [{ email: email }, { ativo: 1 }],
      },
    });
    return user;
  },
};

module.exports = UserService;
