const express = require('express');
app =express();
require("dotenv").config();
const connectDB = require('./models/connectDB')
const router = require('./routers/router')

app.use(express.json())
app.use('/api', router);

connectDB();

const port = process.env.PORT || 5001

app.listen(5001, ()=>{
    console.log(`I am listening to ${port}`)
});

