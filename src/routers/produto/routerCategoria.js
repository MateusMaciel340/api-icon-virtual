const express = require("express");
const categoria = express.Router();

// Controllers
const controllerCategoria = require("../../controllers/produto/controllerCategoria");

categoria.get("/categoria", controllerCategoria.listarCategoria);
categoria.post("/categoria", controllerCategoria.postarCategoria);
categoria.put("/categoria/:id_categoria", controllerCategoria.atualizarCategoria);
categoria.delete("/categoria/:id_categoria", controllerCategoria.removerCategoria);

module.exports = categoria;