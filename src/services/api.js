const axios = require("axios");

const api = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});

module.exports = api;
