var express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//evitar CORS, NAO ESQÇA
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);  // requisições que chegam na raiz devem ser enviadas para o router

router.post('/corretores', (req, res) => {    
    const name = req.body.name  
    const tipo = req.body.tipo
    const salario = req.body.salario
    const creci = req.body.creci
    const data_emissao = req.body.data_emissao
    const percentual = req.body.percentual
    var db = require("./db");
    var Corretores = db.Mongoose.model('corretores', db.UserSchema, 'corretores');
    var object = {name : name, tipo : tipo, salario : salario, creci : creci, data_emissao: data_emissao, percentual : percentual};
    Corretores.create(object, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    });
});

router.get('/corretores', (req, res) =>{
    var db = require("./db");
    var Corretores = db.Mongoose.model('corretores', db.UserSchema, 'corretores');
    Corretores.find({}).lean().exec(
       function (e, docs) {
           res.json(docs);
       });
})

/*
router.get('/clientes', (req, res) =>{
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.find({}).lean().exec(
       function (e, docs) {
           res.json(docs);
       });
})


router.get('/clientes/:cpf', (req, res) =>{
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.find({cpf : req.params.cpf}).lean().exec(
       function (e, docs) {
           res.json(docs);
       });
})

router.post('/clientes', (req, res) => {    
    const nome = req.body.nome  
    const cpf = req.body.cpf
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var object = {username : nome, cpf : cpf};
    Clientes.create(object, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    });
});

router.delete('/clientes/:cpf', (req, res) =>{
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.remove({cpf : req.params.cpf}, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    })
})

router.get('/delete/clientes/:id', (req, res) =>{
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.deleteOne({_id : req.params.id}, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    })
})

router.patch('/clientes/:cpf', (req, res) =>{
    const nome = req.body.nome  
    const cpf = req.params.cpf
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.findOneAndUpdate({cpf : cpf}, {$set:{username: nome}}, {new: true}, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    })
})

router.post('/update/clientes', (req, res) =>{
    const nome = req.body.nome  
    const cpf = req.body.cpf
    const id = req.body.id
    var db = require("./db");
    var Clientes = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Clientes.findOneAndUpdate({_id : id}, {$set:{username: nome, cpf: cpf}}, {new: true}, function(err, result) {
        if (err) return console.error(err);
        res.json(result)
    })
})*/

//inicia o servidor
app.listen(3001);
console.log('API funcionando!');