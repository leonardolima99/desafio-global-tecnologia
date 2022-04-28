const jwt = require("../config/jwt");

const knex = require("../database/connection");

exports.signin = async function (req, res) {
  try {
    const { email, senha } = req.body;

    const user = await knex("users")
      .where({
        email,
        senha,
      })
      .first();

    if (!user) {
      return res.json({ message: "Email ou senha incorretos.", status: 401 });
    }

    const token = await jwt.sign({
      email: user.email,
      nivel_acesso: user.nivel_acesso,
    });
    res.json({ auth: true, token });
  } catch (err) {
    console.log(`Sign in Error: ${err.status} -> ${err.message}`);
  }
};
