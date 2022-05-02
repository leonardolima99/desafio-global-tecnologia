const jwt = require("../config/jwt");
const knex = require("../database/connection");

const bcryptjs = require("bcryptjs");

exports.signin = async function (req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha)
      return res.status(403).json({ error: "Email ou senha inválidos." });

    const user = await knex("users")
      .where({
        email,
      })
      .select("email", "nivel_acesso", "senha")
      .first();

    if (!user) {
      return res.status(401).json({ message: "Este usuário não existe." });
    }

    if (!bcryptjs.compareSync(senha, user.senha)) {
      return res.status(401).json({ message: "Senha incorreta." });
    }

    const token = jwt.sign({
      email: user.email,
      nivel_acesso: user.nivel_acesso,
    });

    res.status(200).json({ token });
  } catch (err) {
    console.log(`Sign in Error: ${err.status} -> ${err.message}`);
  }
};
