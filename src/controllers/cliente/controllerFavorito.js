const { Produto, Cliente } = require("../../models");
const modelFavorito = require("../../models/cliente/modelFavorito");

module.exports = {
    listarFavorito: async(req, res)=>{
        try{
            const usuarioLogado = req.user.id_cliente;
            const listagemFavorito = await modelFavorito.findAll({
                where:{
                    cliente_id: usuarioLogado,
                },
                include:[{
                    model: Produto,
                },{
                    model: Cliente,
                }]
            })

            res.status(200).json(listagemFavorito);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async adicionarFavorito(req, res){
        try{
            const {
                status_favorito, cliente_id, produto_id,
            } = req.body;

            const insercao_favorito = await modelFavorito.create({
                status_favorito: "p", cliente_id: req.user.id_cliente, produto_id,
            })

            res.status(201).json(insercao_favorito);

        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async removerFavorito(req, res){
        try{
            const { id_favorito } = req.params;

            const validarFavorito = await modelFavorito.findByPk(id_favorito);

            if(!validarFavorito){
                return res.status(400).json("Nenhum produto foi encontrado favoritado!");
            }

            const remocao_favorito = await modelFavorito.destroy({
                where:{
                    id_favorito,
                }
            })

            res.status(200).json("O produto favoritado foi removido com sucesso!");
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
}