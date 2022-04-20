const { Categoria } = require("../../models");
const modelProduto = require("../../models/produto/modelProduto");

module.exports = {
    listarProduto: async(req, res)=>{
        try{
            const listagemProduto = await modelProduto.findAll({
                include: Categoria,
            });
            res.status(200).json(listagemProduto);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    procurarProduto: async(req, res)=>{
        try{
            const { id_produto } = req.params;

            const validarProduto = await modelProduto.findByPk(id_produto);

            if(!validarProduto){
                return res.status(400).json("Esse produto não existe!");
            }

            const procurar_produto = await modelProduto.findAll({
                where:{
                    id_produto,
                },
                include: Categoria,
            })

            res.status(200).json(procurar_produto)

        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async postarProduto(req, res){
        try{
            const {
                titulo_produto, descricao_produto, preco_produto, estoque_produto,
                categoria_id,
            } = req.body;

            const insercao_produto = await modelProduto.create({
                titulo_produto, descricao_produto, preco_produto, estoque_produto,
                categoria_id,
            })

            res.status(201).json(insercao_produto);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async atualizarProduto(req, res){
        try{
            const { id_produto } = req.params;
            const {
                titulo_produto, descricao_produto, preco_produto, estoque_produto,
                categoria_id,
            } = req.body;

            const validarProduto = await modelProduto.findByPk(id_produto);

            if(!validarProduto){
                return res.status(400).json("Esse produto não existe!");
            }

            const atualizacao_produto = await modelProduto.update({
                titulo_produto, descricao_produto, preco_produto, estoque_produto,
                categoria_id,
            },{
                where:{
                    id_produto,
                }
            })

            res.status(200).json(`O produto ${titulo_produto} foi atualizado com sucesso!`);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async removerProduto(req, res){
        try{
            const { id_produto } = req.params;

            const validarProduto = await modelProduto.findByPk(id_produto);

            if(!validarProduto){
                return res.status(400).json("Esse produto não existe!");
            }

            const remocao_produto = await modelProduto.destroy({
                where:{
                    id_produto,
                }
            })

            res.status(200).json("O produto foi removido com sucesso!");
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
}