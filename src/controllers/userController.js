const knex = require("../database/connection");

exports.index = async function (req, res) {
  try {
    const users = await knex("users");

    res.json(users);
  } catch (err) {
    console.log(err.status, err.message);
  }
};

exports.create = function (req, res) {
  res.end("Rota para criar um usuário.");
};

exports.update = function (req, res) {
  res.end("Rota para atualizar um usuário.");
};

exports.delete = function (req, res) {
  res.end("Rota para deletar um usuário.");
};
