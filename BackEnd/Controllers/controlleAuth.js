const express = require('express');

const Corretor = require('../models/corretor');
const Venda = require('../models/venda');
const Imoveis = require('../models/imovel');

const router = express.Router();
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
        const venda = await Venda.create(req.body);
        return res.send({venda});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})

//Remove imovel 
router.post('/remove_imovel', async(req, res) =>{
    try{
        await Imoveis.remove(req.body);
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})

router.get('/corretores', async(req, res) =>{
    try {
        Corretor.find({}).lean().exec(
            function (e, docs) {
                res.json(docs);
        });
    }
    catch(err){
        return res.status(400).send({error: 'Falha'})
    }
})

router.get('/vendas', async(req, res) =>{
    try {
        Venda.find({}).lean().exec(
            function (e, docs) {
                res.json(docs);
        });
    }
    catch(err){
        return res.status(400).send({error: 'Falha'})
    }
})

router.get('/vendas/:corretor_id', async(req, res) =>{
    try {
        Venda.find({corretor : req.params.corretor_id}).lean().exec(
            function (e, docs) {
                res.json(docs);
        });
    }
    catch(err){
        return res.status(400).send({error: 'Falha'})
    }
})

router.get('/vendas/:ano/:mes', async(req, res) =>{
    try {
        inicio = new Date(req.params.ano, req.params.mes-1, 1)
        if (req.params.ano != 12) {
            fim = new Date(req.params.ano, req.params.mes, 1)
        } else {
            fim = new Date(req.params.ano+1, 0, 1)
        }
        Venda.find({"dataVenda"  : {$gte : inicio, $lt: fim}}).lean().exec(
            function (e, docs) {
                res.json(docs);
        });
    }
    catch(err){
        return res.status(400).send({error: 'Falha'})
    }
})

router.get('/imoveis', async(req , res) => {
    try{
        const imoveis = await Imoveis.find();
        return res.send({imoveis})
    }catch(err){
        return res.status(400).send({error: 'Falha ao consultar imoveis.'})
    }
})
module.exports = app => app.use('/auth' , router);
