const modelCliente = require("../../models/cliente/modelCliente");
const jwt = require("jsonwebtoken");
const chave = require("../../configs/chave");
const bcrypt = require("bcryptjs");

module.exports = {
    async login(req, res){
        try{
            const { email_cliente, senha_cliente } = req.body;

            const autenticar = await modelCliente.findOne({
                where:{
                    email_cliente,
                }
            });

            if(!autenticar || !bcrypt.compareSync(senha_cliente, autenticar.senha_cliente)){
                return res.status(400).json("Email ou senha incorreta!");
            }

            const token = jwt.sign({
                id_cliente: autenticar.id_cliente,
                nome_cliente: autenticar.nome_cliente,
                email_cliente: autenticar.email_cliente,
                userType: "user",
            }, chave.key);

            return res.status(200).json(token);

        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
}