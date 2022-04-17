const express = require("express");
const cliente = express.Router();

// Controllers
const controllerCliente = require("../../controllers/cliente/controllerCliente");
const controllerLogin = require("../../controllers/cliente/controllerAutenticacao");

cliente.post("/login", controllerLogin.login);

cliente.get("/cliente", controllerCliente.listarCliente);
cliente.post("/cliente", controllerCliente.postarCliente);
cliente.put("/cliente/:id_cliente", controllerCliente.atualizarCliente);
cliente.delete("/cliente/:id_cliente", controllerCliente.removerCliente);

module.exports = cliente;