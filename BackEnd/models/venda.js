const mongoose = require('../database/mongo');

const UserSchema = new mongoose.Schema({
    valorRealVenda:{
        type: Number,
        require: true,
    },
    nomeComprador:{
        type: String,
        require: true,
    },
    dataVenda:{
        type: Date,
        require: true,
    },
    corretor:{
        type: String,
        require: true,
        unique: true
    },
    data_emissao:{
        type: Date,
        require: true,
        default: Date.now
    }
})

const Venda = mongoose.model('Venda' , UserSchema);

module.exports = Venda;