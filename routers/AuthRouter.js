const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/AuthController')

const AuthRouter = ('/',AuthController);
module.exports= AuthRouter;