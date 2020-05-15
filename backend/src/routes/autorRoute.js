const { Router } = require('express');
const autorRoutes = Router();

const authMiddleware = require('../middleware/auth')
const authorMiddleware = require('../controller/Author');

autorRoutes.use(authMiddleware)

autorRoutes.get('/all', authorMiddleware.index);

const route = autorRoutes 

module.exports = route.use('/author',autorRoutes)