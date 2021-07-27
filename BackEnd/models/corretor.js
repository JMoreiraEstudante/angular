const mongoose = require('../database/mongo');

const UserSchema = new mongoose.Schema({
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
    data_emissao:{
        type: Date,
        require: true,
        default: Date.now
    },
    percentual:{
        type: Number,
        require: true
    }
})

const Corretor = mongoose.model('Corretor' , UserSchema);

module.exports = Corretor;