const modelCliente = require("../../models/cliente/modelCliente");
const bcrypt = require("bcryptjs");

module.exports = {
    listarCliente: async(req, res)=>{
        try{
            const listagemCliente = await modelCliente.findAll();
            res.status(200).json(listagemCliente);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async clienteLogado(req, res){
        try{
            res.status(200).json(req.user);
            console.log(req.user)
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async postarCliente(req, res){
        try{
            const {
                nome_cliente, email_cliente, senha_cliente, tipo_cliente, 
                cpf_cliente, telefone_cliente, endereco_cliente,
            } = req.body;

            const senhaCrypt = bcrypt.hashSync(senha_cliente, 10);

            const insercao_cliente = await modelCliente.create({
                nome_cliente, email_cliente, senha_cliente: senhaCrypt, cpf_cliente,
                telefone_cliente, endereco_cliente,
            })

            res.status(201).json(insercao_cliente);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async atualizarCliente(req, res){
        try{
            const { id_cliente } = req.params;
            const {
                nome_cliente, email_cliente, senha_cliente, tipo_cliente, 
                cpf_cliente, telefone_cliente, endereco_cliente,
            } = req.body;

            const validarCliente = await modelCliente.findByPk(id_cliente);

            if(!validarCliente){
                return res.status(400).json("Esse cliente não existe!");
            }

            const senhaCrypt = bcrypt.hashSync(senha_cliente, 10);

            const atualizacao_cliente = await modelCliente.update({
                nome_cliente, email_cliente, senha_cliente: senhaCrypt, cpf_cliente, 
                telefone_cliente, endereco_cliente,
            },{
                where:{
                    id_cliente,
                }
            })
            
            res.status(200).json(`O cliente ${nome_cliente} foi atualizado com sucesso!`);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async removerCliente(req, res){
        try{
            const { id_cliente } = req.params;

            const validarCliente = await modelCliente.findByPk(id_cliente);

            if(!validarCliente){
                return res.status(400).json("Esse cliente não existe!");
            }

            const remocao_cliente = await modelCliente.destroy({
                where:{
                    id_cliente,
                }
            })
            
            res.status(200).json("O cliente foi removido com sucesso!");
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
}