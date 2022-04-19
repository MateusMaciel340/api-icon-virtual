const modelCategoria = require("../../models/produto/modelCategoria");

module.exports = {
    listarCategoria: async(req, res)=>{
        try{
            const listagemCategoria = await modelCategoria.findAll();
            res.status(200).json(listagemCategoria);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    procurarCategoria: async(req, res) => {
        try{
            const { id_categoria } = req.params;
            
            const validarCategoria = await modelCategoria.findByPk(id_categoria);

            if(!validarCategoria){
                return res.status(400).json("Essa categoria não existe!");
            }

            const procurar_categoria = await modelCategoria.findAll({
                where:{
                    id_categoria,
                }
            })

            res.status(200).json(procurar_categoria);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async postarCategoria(req, res){
        try{
            const { titulo_categoria, descricao_categoria } = req.body;

            const insercao_categoria = await modelCategoria.create({
                titulo_categoria, descricao_categoria,
            })

            res.status(201).json(insercao_categoria);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async atualizarCategoria(req, res){
        try{
            const { id_categoria } = req.params;
            const { titulo_categoria, descricao_categoria } = req.body;

            const validarCategoria = await modelCategoria.findByPk(id_categoria);

            if(!validarCategoria){
                return res.status(400).json("Essa categoria não existe!");
            }

            const atualizacao_categoria = await modelCategoria.update({
                titulo_categoria, descricao_categoria,
            },{
                where:{
                    id_categoria,
                }
            })

            res.status(200).json(`A categoria ${titulo_categoria} foi atualizada com sucesso!`);
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
    async removerCategoria(req, res){
        try{
            const { id_categoria } = req.params;

            const validarCategoria = await modelCategoria.findByPk(id_categoria);

            if(!validarCategoria){
                return res.status(400).json("Essa categoria não existe!");
            }

            const remocao_categoria = await modelCategoria.destroy({
                where:{
                    id_categoria,
                }
            })

            res.status(200).json("A categoria foi removida com sucesso!");
        }catch(error){
            res.status(500).json(`${error}`);
        }
    },
}