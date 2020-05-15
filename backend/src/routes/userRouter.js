const { Router } = require('express');
const userRoutes = Router();

const userMiddleware = require('../controller/User');

userRoutes.post('/register', userMiddleware.create);
userRoutes.post('/authenticate', userMiddleware.login);

const userRoute = userRoutes;
module.exports = userRoute.use('/auth',userRoutes)