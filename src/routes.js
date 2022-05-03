const express = require("express");
const routes = express.Router();

const { body, validationResult } = require("express-validator");

const userController = require("./controllers/userController");
const elasticSearchController = require("./controllers/elasticSearchController");
const authController = require("./controllers/authController");

const { authWorker, authAdmin } = require("./middlewares/authMiddleware");

routes
  .get("/", (req, res) => {
    res.end("Desafio Global Tecnologia.");
  })

  .post(
    "/login",
    body("email"),
    body("senha"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    authController.signin
  )

  .get("/health-check", authWorker, elasticSearchController.index)

  .get("/users", authAdmin, userController.index)
  .post(
    "/users",
    authAdmin,
    body("email").isEmail().withMessage("O e-mail deve ser válido."),
    body("senha")
      .isLength({ min: 5 })
      .withMessage("A senha deve ter mais de 5 caracteres."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    userController.create
  )
  .put(
    "/users/:id",
    authAdmin,
    body("email").isEmail().withMessage("O e-mail deve ser válido."),
    body("senha")
      .isLength({ min: 5 })
      .withMessage("A senha deve ser maior que 5."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    userController.update
  )
  .delete("/users/:id", authAdmin, userController.delete);

module.exports = routes;
