const express = require("express");
const cliente = express.Router();

// Controllers
const controllerCliente = require("../../controllers/cliente/controllerCliente");
const controllerLogin = require("../../controllers/cliente/controllerAutenticacao");

// Middlewares
const permissao = require("../../middlewares/permissao");

cliente.post("/login", controllerLogin.login);

cliente.get("/cliente", 
    permissao, controllerCliente.listarCliente
);
cliente.post("/cliente", 
    permissao, controllerCliente.postarCliente
);
cliente.put("/cliente/:id_cliente", 
    permissao, controllerCliente.atualizarCliente
);
cliente.delete("/cliente/:id_cliente", 
    permissao, controllerCliente.removerCliente
);

module.exports = cliente;