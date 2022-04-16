const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routers");
const db = require("./databases");

app.use(
    express.json(), router,
);

db.Conexao();

app.listen(process.env.PORT, () => {
    console.log(`Servidor aberto na porta ${process.env.PORT}`);
})