const Db = require('../config/database');
const Erro = require('../config/fn')
module.exports = {
    async create(req,res){
        try{
            return res.json({
                user:req.userId
            })
        }catch(err){
            console.log(err)
            Erro(err,'error')
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    },
    async index(req,res){
        try{
            const authors = await Db.columns({codigo:'id_autor'},{name:'nome_autor'}).select().from('autor');
            return res.json(authors)
        }catch(err){
            Erro(err)
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    },
   async show (req,res){
        try{
        
        }catch(err){
            console.log(err)
            Erro(err,'error')
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    }
}