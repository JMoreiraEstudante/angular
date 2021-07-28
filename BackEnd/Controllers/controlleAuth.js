const express = require('express');

const Imoveis = require('../models/imovel')

const Corretor = require('../models/corretor');

const Venda = require('../models/venda')

const router = express.Router();

router.post('/cadastro_Corretor' , async(req , res) =>{
    try{
        const corretor = await Corretor.create(req.body);
        return res.send({ corretor});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'})
    }
})

router.post('/imoveis' , async(req , res) =>{
    try{
        const Imoveis = await Imoveis.create(req.body);
        return res.send({imoveis});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao carregar os imoveis'})
    }
})

router.post('/venda', async(req, res) =>{
    try{
        const Venda = await Venda.create(req.body);
        return res.send({Venda});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao carregar as vendas'})
    }
})


module.exports = app => app.use('/auth' , router);
