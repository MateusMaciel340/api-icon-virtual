const db = require("../../databases");
const { DataTypes } = require("sequelize");

module.exports = db.define("tb_categoria",{
    id_categoria:{
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true, field: "id_categoria",
    },
    titulo_categoria:{
        type: DataTypes.STRING, field: "titulo_categoria",
    },
    descricao_categoria:{
        type: DataTypes.TEXT, field: "descricao_categoria",
    },
},{
    tableName: "tb_categoria",
})