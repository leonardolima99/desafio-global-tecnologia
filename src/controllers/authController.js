const jwt = require("../config/jwt");

const knex = require("knex");

exports.signin = async function (req, res) {
  try {
    const { email, senha } = req.body;

    const user = await knex("users").where({ email, senha });
    console.log(user);

    res.end();
  } catch (err) {
    console.log(err.status, err.message);
  }
};
