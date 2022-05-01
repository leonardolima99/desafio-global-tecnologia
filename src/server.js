const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config({ path: ".env" });

const app = express();

// Resolve o problema do cors
app.use((req, res, next) => {
  // Qualquer site pode se conectar.
  res.header("Access-Control-Allow-Origin", "*");
  // Pode usar os 4 métodos
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  // permite o authorization
  res.header("Access-Control-Allow-Headers", "authorization");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in port ${PORT}`));
