const Db = require('../config/database');
const Erro = require('../config/fn');
const { descryptPass, encriptPass } = require('./util/encrypt')
const generateToken  = require('../config/configToken')
module.exports = {
    async create(req, res) {
        try {
            const { nome_usuario, pass_usuario, is_admin = 0 } = req.body;

            if (!nome_usuario || !pass_usuario) return res.status(400).json({
                    type: 'error',
                    message: 'campos vazios'})
            

            let user = await Db.select('nome_usuario', 'is_admin')
                .from('usuario').where('nome_usuario', nome_usuario).clearSelect();

            if (user.length > 0) {
                return res.status(200).json({
                    type: 'error',
                    message: 'Usuário já existe no banco de dados'
                })
            }

            const passEncript = await encriptPass(pass_usuario.trim())

            await Db.insert({
                nome_usuario: nome_usuario.trim(),
                pass_usuario: passEncript,
                is_admin
            }).into('usuario')

            user = await Db.select('id_usuario','nome_usuario', 'is_admin')
                .from('usuario').where('nome_usuario', nome_usuario).clearSelect();
            
            const [{ id_usuario: userId, is_admin: isAdmin }] = user

            return res.status(200).json({
                type: 'success',
                message: 'Usuário criado com sucesso',
                nome_usuario,
                isAdmin,
                token: generateToken(userId),

            })
        } catch (err) {
            console.log(err)
            Erro(err)
            return res.status(400).send({ message: 'Erro ao processar requisição' })
        }
    },
    async login(req, res) {
        try {
            const { nome_usuario, pass_usuario } = req.body

            if (!nome_usuario || !pass_usuario) {
                return res.status(400).json({
                    type: 'error',
                    message: 'campos vazios'
                })
            }

            let user = await Db.select('nome_usuario').from('usuario').where('nome_usuario', nome_usuario);

            if (user.length === 0) return res.status(404).json({
                type: 'error',
                message: 'Usuário nao encontrado'
            })

            const [{ id_usuario: userId, pass_usuario: passUser, is_admin: isAdmin }] = user

            if (!await descryptPass(pass_usuario, passUser)) return res.status(400).json({
                type: 'error',
                message: 'Senha incorreta'
            })

            return res.status(200).json({
                nome_usuario,
                isAdmin,
                token: generateToken(userId),
            })


        } catch (err) {
            console.log(err)
            Erro(err)
            return res.status(400).json({ message: 'Erro ao processar requisição' })
        }
    }
}