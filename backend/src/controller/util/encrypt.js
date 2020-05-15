const bcrypt = require('bcrypt');
const Erro = require('../../config/fn')

module.exports = {
    async encriptPass(pass) {
        try {
            const hash = await bcrypt.hash(pass, 10)
            return hash;
        } catch (err) {
            Erro(err)
       }
        
    },
    async descryptPass(currentPass, targetPass) {
        try {
            const hash = await bcrypt.compare(currentPass, targetPass)     
            return hash;
        } catch (err) {
            Erro(err)
        }
    }
}