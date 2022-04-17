const Cliente = require("./cliente/modelCliente");
const Produto = require("./produto/modelProduto");
const Categoria = require("./produto/modelCategoria");
const Favorito = require("./cliente/modelFavorito");


// Categoria e Produto
Categoria.hasMany(Produto,{
    foreignKey: "categoria_id",
})

Produto.belongsTo(Categoria, {
    foreignKey: "categoria_id",
})

// Cliente e Favorito
Cliente.hasMany(Favorito,{
    foreignKey: "cliente_id",  
})

Favorito.belongsTo(Cliente,{
    foreignKey: "cliente_id",
})

// Produto e Favorito
Produto.hasMany(Favorito,{
    foreignKey: "produto_id",
})

Favorito.belongsTo(Produto,{
    foreignKey:"produto_id",
})

module.exports = {
    Cliente, Produto, Categoria, Favorito,
}