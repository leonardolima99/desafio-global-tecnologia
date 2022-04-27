const knex = require("knex");
const knexfile = require("../../knexfile");

const connection = knex(knexfile[process.env.NODE_ENV]);

module.exports = connection;
