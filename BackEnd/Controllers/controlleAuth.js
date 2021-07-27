const express = require('express');

const Corretor = require('../models/corretor');

const router = express.Router();

router.post('/cadastro_Corretor' , async(req , res) =>{
    try{
        const corretor = await Corretor.create(req.body);
        return res.send({ corretor});
    }catch(err){
        return res.status(400).send({error: 'Falha ao Registrar'})
    }
})

module.exports = app => app.use('/auth' , router);