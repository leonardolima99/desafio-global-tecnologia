const jwt = require("../config/jwt");

const knex = require("../database/connection");

exports.signin = async function (req, res) {
  try {
    const { email, senha } = req.body;

    const user = await knex("users").where({
      email,
      senha,
    });
    console.log(!user.length);
    if (!user.length) {
      return res.json({ message: "Email ou senha incorretos.", status: 401 });
    }

    res.json(user);
  } catch (err) {
    console.log(err.status, err.message);
  }
};
