const express = require("express");
const routes = require("./routes");

require("dotenv").config({ path: ".env" });
console.log(process.env.NODE_ENV);
const app = express();

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in port ${PORT}`));
