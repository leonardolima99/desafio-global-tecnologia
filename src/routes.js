const express = require("express");
const routes = express.Router();

const userController = require("./controllers/userController");
const elasticSearchController = require("./controllers/elasticSearchController");
const authController = require("./controllers/authController");

routes
  .get("/", (req, res) => {
    res.end("Desafio Global Tecnologia.");
  })

  .post("/login", authController.signin)

  .get("/helth-check", elasticSearchController.index)

  .get("/users", userController.index)
  .post("/users", userController.create)
  .put("/users/:id", userController.update)
  .delete("/users/:id", userController.delete);

module.exports = routes;
