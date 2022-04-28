const jwt = require("../config/jwt");
const knex = require("../database/connection");

const bcryptjs = require("bcryptjs");

exports.signin = async function (req, res) {
  try {
    const { email, senha } = req.body;

    const user = await knex("users")
      .where({
        email,
      })
      .select("email", "nivel_acesso", "senha")
      .first();

    if (!user) {
      return res.json({ message: "Este usuário não existe.", status: 401 });
    }

    if (!bcryptjs.compareSync(senha, user.senha)) {
      return res.json({ message: "Senha incorreta.", status: 401 });
    }

    const token = jwt.sign({
      email: user.email,
      nivel_acesso: user.nivel_acesso,
    });
    res.json({ token });
  } catch (err) {
    console.log(`Sign in Error: ${err.status} -> ${err.message}`);
  }
};
