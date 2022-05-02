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

    res.status(200).json(users);
  } catch (err) {
    console.log(`User index error: ${err.status} -> ${err.message}`);
  }
};

exports.create = async function (req, res) {
  try {
    const { email, nivel_acesso, senha } = req.body;

    if (!email || !senha)
      return res.status(403).json({ error: "Email ou senha inválidos." });

    if (nivel_acesso !== "administrador" && nivel_acesso !== "funcionario") {
      return res.status(403).json({ error: "Nível de acesso inválido." });
    }

    const userExists = await knex("users").where({ email }).first();

    if (userExists)
      return res.status(403).json({ error: "Este usuário já existe." });

    const hash_senha = bcryptjs.hashSync(senha, 10);

    const users = await knex("users").insert({
      email,
      nivel_acesso,
      senha: hash_senha,
    });
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    console.log(`User create error: ${err.status} -> ${err.message}`);
  }
};

exports.update = async function (req, res) {
  try {
    const { id } = req.params;
    const { email, nivel_acesso, senha } = req.body;

    if (!email || !senha)
      return res.status(403).json({ error: "Email ou senha inválidos." });

    if (nivel_acesso !== "administrador" && nivel_acesso !== "funcionario") {
      return res.status(403).json({ error: "Nível de acesso inválido." });
    }

    const hash_senha = bcryptjs.hashSync(senha, 10);

    const user = await knex("users").where({ id }).update({
      email,
      nivel_acesso,
      senha: hash_senha,
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(`User update error: ${err.status} -> ${err.message}`);
  }
};

exports.delete = async function (req, res) {
  try {
    const { id } = req.params;

    const user = await knex("users").where({ id }).first();

    if (!user) res.status(403).json({ error: "Este usuário não existe." });

    /* if (user.email == req.email)
      return res
        .status(403)
        .json({ message: "Você não pode apagar seu proŕio usuário." }); */

    await knex("users").where({ id }) /* .del() */;
    res.status(200).json({ message: "Usuário deletado." });
    /* const users = await knex("users").where({ id });

    res.status(200).json({ message: "Linha que deleta comentada." }); */
  } catch (err) {
    console.log(`User delete error: ${err.status} -> ${err.message}`);
  }
};
