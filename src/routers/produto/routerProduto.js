const express = require("express");
const produto = express.Router();

// Controllers
const controllerProduto = require("../../controllers/produto/controllerProduto");

// Middlewares
const permissao = require("../../middlewares/permissao");

produto.get("/produto", 
    permissao, controllerProduto.listarProduto
);
produto.post("/produto", 
    permissao, controllerProduto.postarProduto
);
produto.put("/produto/:id_produto", 
    permissao, controllerProduto.atualizarProduto
);
produto.delete("/produto/:id_produto", 
    permissao, controllerProduto.removerProduto
);

module.exports = produto;