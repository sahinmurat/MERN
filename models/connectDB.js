const mongoose = require('mongoose');

const connectDB =async ()=>{
    try {
        await mongoose.connect('mongodb+srv://murat:1qaZ2wsX.@cluster0.fqx6s.mongodb.net/test', 
        {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to DB')
        
    } catch (error) {
        console.log(error)
    }
}
mongoose.connect('mongodb+srv://murat:1qaZ2wsX.@cluster0.fqx6s.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

module.exports = connectDB;