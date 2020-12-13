const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res)=>{
    console.log('router page');
    res.send('router')
});

module.exports = router;