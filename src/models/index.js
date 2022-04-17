const Cliente = require("./cliente/modelCliente");
const Produto = require("./produto/modelProduto");
const Categoria = require("./produto/modelCategoria");

Categoria.hasMany(Produto,{
    foreignKey: "categoria_id",
})

Produto.belongsTo(Categoria, {
    foreignKey: "categoria_id",
})

module.exports = {
    Cliente, Produto, Categoria
}