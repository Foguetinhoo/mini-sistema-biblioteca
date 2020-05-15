const jwt = require('jsonwebtoken')
const Erro = require('./fn')

module.exports = (user_id) => {
        try {
            const token = jwt.sign({ id: user_id }, process.env.API_TOKEN,
                {
                    expiresIn: 86400
                })
            return token;
        } catch (err) {
            Erro(err)
            return err;
        }
    }