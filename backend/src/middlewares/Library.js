module.exports = {
    async create(req,res){
        try{
        
        }catch(err){
            console.log(err)
            Erro(err,'error')
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    },
    async index(req,res){
        try{
        
        }catch(err){
            console.log(err)
            Erro(err,'error')
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    },
    async show(req,res){
        try{
        
        }catch(err){
            console.log(err)
            Erro(err,'error')
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    }
}