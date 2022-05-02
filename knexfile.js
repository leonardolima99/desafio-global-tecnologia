const path = require("path");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config({ path: ".env" });

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
    useNullAsDefault: true,
  },
};
