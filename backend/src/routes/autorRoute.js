const { Router } = require('express');
const autorRoutes = Router();

const authorMiddleware = require('../middlewares/Author');

autorRoutes.get('/author/all', authorMiddleware.index);

module.exports = autorRoutes;