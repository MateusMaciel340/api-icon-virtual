const express = require("express");
const router = express.Router();

// Rotas Externas
const routerCliente = require("./cliente/routerCliente");
const routerCategoria = require("./produto/routerCategoria");
const routerProduto = require("./produto/routerProduto");
const routerFavorito = require("./cliente/routerFavorito");

router.use(
    routerCliente, routerCategoria, routerProduto, routerFavorito,
);

module.exports = router;