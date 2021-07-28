var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backend', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    tipo:{
        type: String,
        require: true,
    },
    salario:{
        type: Number,
        require: true,
    },
    creci:{
        type: Number,
        require: true,
        unique: true
    },
    percentual:{
        type: Number,
        require: true
    }
}, { collection: 'corretores' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }