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
      .select("email", "nivel_acesso")
      .first();

    if (!user) {
      return res.json({ message: "Email ou senha incorretos.", status: 401 });
    }

    const token = jwt.sign(user);
    res.json({ auth: true, token });
  } catch (err) {
    console.log(`Sign in Error: ${err.status} -> ${err.message}`);
  }
};
