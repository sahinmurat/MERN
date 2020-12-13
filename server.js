const express = require('express');
app =express();

const router = require('./routers/router')

app.use('/', router);

app.listen(5001, ()=>{
    console.log('I am listening to 5001')
})

