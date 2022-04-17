const express = require("express");
const router = express.Router();

// Rotas Externas
const routerCliente = require("./cliente/routerCliente");
const routerCategoria = require("./produto/routerCategoria");

router.use(
    routerCliente, routerCategoria,
);

module.exports = router;