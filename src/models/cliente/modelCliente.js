const db = require("../../databases");
const { DataTypes } = require("sequelize");

module.exports = db.define("tb_cliente",{
    id_cliente:{
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true, field: "id_cliente",
    },
    nome_cliente:{
        type: DataTypes.STRING, field: "nome_cliente",
    },
    email_cliente:{
        type: DataTypes.STRING, field: "email_cliente",
    },
    senha_cliente:{
        type: DataTypes.STRING, field: "senha_cliente",
    },
    cpf_cliente:{
        type: DataTypes.STRING, field: "cpf_cliente",
    },
    telefone_cliente:{
        type: DataTypes.STRING, field: "telefone_cliente",
    },
    endereco_cliente:{
        type: DataTypes.STRING, field: "endereco_cliente",
    }
},{
    tableName: "tb_cliente",
})