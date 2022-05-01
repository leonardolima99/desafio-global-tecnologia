const express = require("express");
const routes = express.Router();

const userController = require("./controllers/userController");
const elasticSearchController = require("./controllers/elasticSearchController");
const authController = require("./controllers/authController");

const { authWorker, authAdmin } = require("./middlewares/authMiddleware");

routes
  .get("/", (req, res) => {
    res.end("Desafio Global Tecnologia.");
  })

  .post("/login", authController.signin)

  .get("/helth-check", authWorker, elasticSearchController.index)

  .get("/users", authAdmin, userController.index)
  .post("/users", authAdmin, userController.create)
  .put("/users/:id", authAdmin, userController.update)
  .delete("/users/:id", authAdmin, userController.delete);

module.exports = routes;
