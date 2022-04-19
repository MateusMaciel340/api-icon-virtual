const express = require("express");
const categoria = express.Router();

// Controllers
const controllerCategoria = require("../../controllers/produto/controllerCategoria");

// Middlewares
const permissao = require("../../middlewares/permissao");

categoria.get("/categoria", 
    permissao, controllerCategoria.listarCategoria
);
categoria.get("/categoria/:id_categoria",
    permissao, controllerCategoria.procurarCategoria
)

categoria.post("/categoria", 
    permissao, controllerCategoria.postarCategoria
);
categoria.put("/categoria/:id_categoria", 
    permissao, controllerCategoria.atualizarCategoria
);
categoria.delete("/categoria/:id_categoria", 
    permissao, controllerCategoria.removerCategoria
);

module.exports = categoria;