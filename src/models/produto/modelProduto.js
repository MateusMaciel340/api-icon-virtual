const db = require("../../databases");
const { DataTypes } = require("sequelize");

const modelCategoria = require("./modelCategoria");

module.exports = db.define("tb_produto",{
    id_produto:{
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true, field: "id_produto",
    },
    titulo_produto:{
        type: DataTypes.STRING, field: "titulo_produto",
    },
    descricao_produto:{
        type: DataTypes.TEXT, field: "descricao_produto",
    },
    preco_produto:{
        type: DataTypes.DOUBLE, field: "preco_produto",
    },
    estoque_produto:{
        type: DataTypes.INTEGER, field: "estoque_produto",
    },
    categoria_id:{
        type: DataTypes.INTEGER, field: "categoria_id",
        references:{
            model: modelCategoria,
            key: "id",
        }
    },
},{
    tableName: "tb_produto",
})