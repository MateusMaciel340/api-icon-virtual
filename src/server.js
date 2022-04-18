const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers");
const db = require("./databases");
const handleError = require("./middlewares/handleError");

app.use(cors({
    origin: process.env.CORS,
}));

app.use(
    express.json(), router, handleError,
);

db.Conexao();

app.listen(process.env.PORT, () => {
    console.log(`Servidor aberto na porta ${process.env.PORT}`);
})