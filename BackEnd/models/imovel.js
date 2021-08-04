const mongoose = require('../database/mongo');

const UserSchema = new mongoose.Schema({
    codigo:{
        type: Number,
        require: true,
        unique: true
    },
    tipo:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    nomeVendedor:{
        type: String,
        require: true
    },
    preco:{
        type: Number,
        require: true
    },
    imagem:{
        type: String,
        require: true
    },
    status:{
        type: String,
        required: true,
        Default: "Avenda"
    },
    data:{
        type: Date,
        require: true,
        Default: Date.now
    },
})

const Imoveis = mongoose.model('Imoveis' , UserSchema);

module.exports = Imoveis;
