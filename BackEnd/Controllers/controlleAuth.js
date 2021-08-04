const express = require('express');

const Corretor = require('../models/corretor');
const Venda = require('../models/venda');
const Imoveis = require('../models/imovel');

const router = express.Router();
//#region CADASTRO
router.post('/cadastro_corretor' , async(req , res) =>{
    try{
        const corretor = await Corretor.create(req.body);
        return res.send({ corretor});
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'})
    }
})
router.post('/cadastro_imoveis' , async(req , res) =>{
   // console.log(req.body)
    try{
        const imovelCadastro = await Imoveis.create(req.body);
        return res.send({imovelCadastro});
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar imovel'})
    }
})
router.post('/cadastro_venda', async(req, res) =>{
    console.log(req.body)
    try{
        const venda = await Venda.create(req.body);
        const imovel = await Imoveis.updateOne({codigo:req.body.imovel}, {$set: {status: 'vendido'}})
        console.log(imovel)
        return res.send({venda});
    }
    catch(err){
        console.log(err)
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})
//#endregion

//#region Consulta
router.get('/corretores', async(req, res) =>{
    try {
        const corretores = await Corretor.find();
        return res.status(200).send({corretores})
    }
    catch(err){
        console.lor(err)
        return res.status(400).send({error: 'Falha'})
    }
})

router.get('/vendas', async(req, res) =>{
    try {
        const vendas = await Venda.find();
        return res.status(200).send({vendas})
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
//#endregion

//#region REMOVE
router.post('/remove_imovel', async(req, res) =>{
    try{
        await Imoveis.updateOne({codigo:req.body.codigo}, {$set: {status: "removido"}});
        await Imoveis.deleteOne({codigo:req.body.codigo});
        return res.status(200);
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})
//#endregion

//#region UPDATE
router.post('/update_imovel', async(req, res) =>{
    try{
        await Imoveis.updateOne({codigo:req.body.codigo}, {$set: {descricao:req.body.descricao , nomeVendedor:req.body.nomeVendedor, preco:req.body.preco , imagem:req.body.imagem , data:req.body.data}});
        return res.status(200);
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})

router.post('/update_salario', async(req, res) =>{
    try{
        if(req.body.tipo == 'Contratado'){
            await Corretor.updateOne({_id:req.body._id}, {$set: {salario:req.body.salario }});
            return res.status(200);
        }else {
            await Corretor.updateOne({_id:req.body._id}, {$set: {percentual:req.body.percentual }});
            return res.status(200);
        }
    }
    catch(err){
        return res.status(400).send({error: 'Falha ao Cadastrar Venda'})
    }
})
//#endregion
module.exports = app => app.use('/auth' , router);
