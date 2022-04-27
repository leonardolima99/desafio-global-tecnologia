const knex = require("../database/connection");

exports.index = async function (req, res) {
  try {
    const users = await knex("users");

    res.json(users);
  } catch (err) {
    console.log(err.status, err.message);
  }
};

exports.create = async function (req, res) {
  try {
    const { email, nivel_acesso, senha } = req.body;

    const users = await knex("users").insert({ email, nivel_acesso, senha });

    res.json(users);
  } catch (err) {
    console.log(err.status, err.message);
  }
};

exports.update = async function (req, res) {
  try {
    const { id } = req.params;
    const { email, nivel_acesso, senha } = req.body;

    const user = await knex("users").where({ id }).update({
      email,
      nivel_acesso,
      senha,
    });

    res.json(user);
  } catch (err) {
    console.log(err.status, err.message);
  }
};

exports.delete = async function (req, res) {
  try {
    const { id } = req.params;

    /* const users = await knex("users").where({ id }).del(); */
    /* res.json({ message: "Usuário deletado.", status: 200 }); */
    const users = await knex("users").where({ id });

    res.json({ message: "Linha que deleta comentada.", status: 200 });
  } catch (err) {
    console.log(err.status, err.message);
  }
};
