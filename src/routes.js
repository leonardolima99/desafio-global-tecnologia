const express = require("express");
const routes = express.Router();

routes
  .get("/", (req, res) => {
    res.end("Hello Global Tecnologias!");
  })
  .get("/users", (req, res) => {
    res.end("Rota para listar os usuários.");
  })
  .post("/users", (req, res) => {
    res.end("Rota para criar um usuário.");
  })
  .put("/users/:id", (req, res) => {
    res.end("Rota para atualizar um usuário.");
  })
  .delete("/users/:id", (req, res) => {
    res.end("Rota para deletar um usuário.");
  });

module.exports = routes;
