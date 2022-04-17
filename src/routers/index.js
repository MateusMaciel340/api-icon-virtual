const express = require("express");
const router = express.Router();

// Rotas Externas
const routerCliente = require("./cliente/routerCliente");

router.use(routerCliente);

module.exports = router;