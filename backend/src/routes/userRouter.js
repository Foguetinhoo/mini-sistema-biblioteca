const { Router } = require('express');
const userRoutes = Router();

const userMiddleware = require('../middlewares/User');

userRoutes.post('/user/register', userMiddleware.create);

module.exports = userRoutes;