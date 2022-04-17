const db = require("../../databases");
const { DataTypes } = require("sequelize");

const model_cliente = require("./modelCliente");
const model_produto = require("../produto/modelProduto");

module.exports = db.define("tb_favorito",{
    id_favorito:{
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true, field: "id_favorito"
    },
    status_favorito:{
        type: DataTypes.CHAR, field: "status_favorito",
    },
    cliente_id:{
        type: DataTypes.INTEGER, field: "cliente_id",
        references:{
            model: model_cliente,
            key: "id",
        }
    },
    produto_id:{
        type: DataTypes.INTEGER, field: "produto_id",
        references:{
            model: model_produto,
            key: "id",
        }
    },
},{
    tableName: "tb_favorito",
})