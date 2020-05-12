const express = require("express");
const Routes = express.Router();

//Routes
const autorRoutes = require('./autorRoute')
const userRoutes = require('./userRouter')

module.exports = Routes.use([autorRoutes,userRoutes])