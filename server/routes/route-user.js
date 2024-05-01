const express = require('express')
const  UsersRouter = express.Router();
const {
    getRegister,getLogin } = require('../contolllor/controllor-user.js');



UsersRouter.post('/register',getRegister);
UsersRouter.post('/login',getLogin);


module.exports= UsersRouter;