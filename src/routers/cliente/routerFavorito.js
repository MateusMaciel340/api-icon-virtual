const express = require("express");
const favorito = express.Router();

// Controller
const controllerFavorito = require("../../controllers/cliente/controllerFavorito");

// Middlewares
const permissao = require("../../middlewares/permissao");

favorito.get("/favorito", 
    permissao, controllerFavorito.listarFavorito
);
favorito.post("/favorito", 
    permissao, controllerFavorito.adicionarFavorito
);
favorito.delete("/favorito/:id_favorito", 
    permissao, controllerFavorito.removerFavorito
);

module.exports = favorito;