const Person = require('../models/personDB');
const bcrypt = require('bcryptjs');


exports.login = (req,res) =>{
    res.send('login')
}

exports.register = async (req,res) =>{
    const {firstName, lastName, email,password} = req.body;
    console.log(firstName,lastName,email,password);

    const salt = await bcrypt.genSalt(5);
    const newPassword = await bcrypt.hash(password,salt);

    const userData = await Person.findOne({email});

    if(userData){
        return res.status(400).json({errors : [{messae : 'user already exist'}]})
    }

    const aaa = new Person({
        firstName,
        lastName,
        email,
        password : newPassword
    })
    await aaa.save();

    res.send('register');
}