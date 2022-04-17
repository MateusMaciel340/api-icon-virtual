const express = require("express");
const favorito = express.Router();

// Controller
const controllerFavorito = require("../../controllers/cliente/controllerFavorito");

favorito.get("/favorito", controllerFavorito.listarFavorito);
favorito.post("/favorito", controllerFavorito.adicionarFavorito);
favorito.delete("/favorito/:id_favorito", controllerFavorito.removerFavorito);

module.exports = favorito;