const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });

const { SECRET } = process.env;

module.exports = {
  sign: (payload) => jwt.sign(payload, SECRET, { expiresIn: 86400 }),
  verify: (token) => jwt.verify(token, SECRET),
};
