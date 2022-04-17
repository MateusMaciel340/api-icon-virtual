const express = require("express");
const produto = express.Router();

// Controllers
const controllerProduto = require("../../controllers/produto/controllerProduto");

produto.get("/produto", controllerProduto.listarProduto);
produto.post("/produto", controllerProduto.postarProduto);
produto.put("/produto/:id_produto", controllerProduto.atualizarProduto);
produto.delete("/produto/:id_produto", controllerProduto.removerProduto);

module.exports = produto;