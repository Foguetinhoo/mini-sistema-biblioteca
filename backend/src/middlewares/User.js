const Db = require('../config/database');
const Erro = require('../config/fn')
module.exports = {
   async create(req,res){
        try{
           const{ nome_usuario, pass_usuario, is_admin = 0 } = req.body;
            if (!nome_usuario || !pass_usuario) {
                return res.status(200).json({
                    type: 'error',
                    message: nome_usuario
                })
          }  
            let user = await Db.select('nome_usuario')
            .from('usuario').where('nome_usuario',nome_usuario);

            if(user.length > 0){
                return res.json({
                    type:'error',
                    message:'Usuário já existe no banco de dados'
                })
            }
            await Db.insert({
                nome_usuario: nome_usuario.trim(),
                pass_usuario: pass_usuario.trim(),
                is_admin
            }).into('usuario')

            return res.status(200).json({
                type:'success',
                message:'Usuário criado com sucesso'
            })
        }catch(err){
            console.log(err)
            Erro(err)
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    },
    async login(req,res){
        try{
        
        }catch(err){
            console.log(err)
            Erro(err)
            return res.status(400).send({message:'Erro ao processar requisição'})
        }
    }
}