const express = require('express');
const router = express.Router();
const app = express();
const AuthRouter = require('./AuthRouter')

router.get('/auth', AuthRouter);



module.exports = router;