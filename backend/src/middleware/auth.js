const  jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) return res.status(401).json({
                type: 'error',
            message: 'Token não informado'
        })
        
        const partsToken = authHeader.split(' ');

        if (!partsToken.length === 2) return res.status(401).json({
            type: 'error',
            message: 'Token error'
        })
        
        const [scheme, token] = partsToken;
        
        if (!/^Bearer$/i.test(scheme)) return res.status(401).json({
            type: 'error',
            message: 'Formato de Token incorreto'
        })

        jwt.verify(token, process.env.API_TOKEN, (err, decoded) => {
            if (err) return res.status(401).json({
                type: 'error',
                message: 'Token invalido'
            })
            req.userId = decoded.id
        })
        return next()
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}