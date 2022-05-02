const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config({ path: ".env" });

const app = express();

// Resolve o problema do cors
app.use(cors());
app.use((req, res, next) => {
  // Qualquer site pode se conectar.
  res.header("Access-Control-Allow-Origin", "*");
  // permite o authorization
  res.header("Access-Control-Allow-Headers", "authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  // Pode usar os métodos
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in port ${PORT}`));
