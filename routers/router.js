const express = require('express');
const app = express();
router = express.Router();

const AuthRouter = require('./AuthRouter')

router.use("/auth", AuthRouter)

module.exports = router