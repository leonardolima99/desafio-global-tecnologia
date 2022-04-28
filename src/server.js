const express = require("express");
const routes = require("./routes");

require("dotenv").config({ path: ".env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in port ${PORT}`));
