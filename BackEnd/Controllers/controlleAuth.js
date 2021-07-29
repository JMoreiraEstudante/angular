const express = require('express');

const Corretor = require('../models/corretor');
const Venda = require('../models/venda');
const Imoveis = require('../models/imovel');

const router = express.Router();
//#region CADASTROS
router.post('/cadastro_corretor' , async(req , res) =>{
    try{
        const corretor = await Corretor.create(req.body);
        return res.send({ corretor});
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'})
    }
})
router.post('/cadastro_imoveis' , async(req , res) =>{
    console.log(req.body)
    try{
        const imovelCadastro = await Imoveis.create(req.body);
        return res.send({imovelCadastro});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar imovel'})
    }
})
router.post('/cadastro_venda', async(req, res) =>{
    try{
        const Venda = await Venda.create(req.body);
        return res.send({Venda});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})
//#endregion

//#region CONSULTAS
router.get('/imoveis', async(req , res) => {
    try{
        const imoveis = await Imoveis.find();
        return res.send({imoveis})
    }catch(err){
        return res.status(400).send({error: 'Falha ao consultar imoveis.'})
    }
})
//#endregion
module.exports = app => app.use('/auth' , router);