const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello Global Tecnologias!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running in ${PORT}`));
