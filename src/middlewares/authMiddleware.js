const jwt = require("../config/jwt");
const knex = require("../database/connection");

exports.authWorker = async function (req, res, next) {
  try {
    const [, token] = req.headers.authorization.split(" ");

    const { email } = jwt.verify(token);
    const result = await knex("users")
      .where({
        email,
      })
      .first();

    if (!result) return res.status(401).json({ error: "Usuário não existe." });

    const forbidden = !(
      result.nivel_acesso === "funcionario" ||
      result.nivel_acesso === "administrador"
    );

    if (forbidden) {
      return res.status(401).json({ error: "Usuário não autorizado" });
    }

    next();
  } catch (err) {
    console.log(err.status, err.message);
  }
};

exports.authAdmin = async function (req, res, next) {
  try {
    const [, token] = req.headers.authorization.split(" ");

    const { email } = jwt.verify(token);
    const result = await knex("users")
      .where({
        email,
        nivel_acesso: "administrador",
      })
      .first();

    if (!result) return res.status(401).json({ error: "Não autorizado." });

    next();
  } catch (err) {
    console.log(err.status, err.message);
  }
};
