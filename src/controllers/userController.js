const knex = require("../database/connection");

const bcryptjs = require("bcryptjs");

exports.index = async function (req, res) {
  try {
    const users = await knex("users").select(
      "id",
      "email",
      "nivel_acesso",
      "created_at",
      "updated_at"
    );

    res.json(users);
  } catch (err) {
    console.log(`User index error: ${err.status} -> ${err.message}`);
  }
};

exports.create = async function (req, res) {
  try {
    const { email, nivel_acesso, senha } = req.body;

    const hash_senha = bcryptjs.hashSync(senha, 10);

    const users = await knex("users").insert({
      email,
      nivel_acesso,
      senha: hash_senha,
    });

    res.json(users);
  } catch (err) {
    console.log(`User create error: ${err.status} -> ${err.message}`);
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
    console.log(`User update error: ${err.status} -> ${err.message}`);
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
    console.log(`User delete error: ${err.status} -> ${err.message}`);
  }
};
