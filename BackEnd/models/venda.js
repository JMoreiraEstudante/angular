/*

const mongoose = require('../database/mongo');

const UserSchema = new mongoose.Schema({
    valorRealVenda:{
        type: number,
        require: true,
    },
    nomeComprador:{
        type: string,
        require: true,
    },
    dataVenda:{
        type: Date,
        require: true,
    },
    corretor:{
        type: Number,
        require: true,
        unique: true
    },
    data_emissao:{
        type: Date,
        require: true,
        default: Date.now
    }
})

const Corretor = mongoose.model('Venda' , UserSchema);

module.exports = Venda;

*/