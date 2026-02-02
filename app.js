const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Clientes = require('./models/Clientes');

// Configuração do body-parser

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post("/cadastro", function(req, res){
    Clientes.create({
        nome:req.body.nome,
        email:req.body.email,
        senha:req.body.senha,
        telefone:req.body.telefone
    }).then(function(){
        res.send("Cliente cadastrado com sucesso!");
    }).catch(function(erro){
        res.send("Houve um erro ao cadastrar o cliente: " + erro);  
})
});

app.get("/", function (req,res){
    Clientes.findAll().then(function(clientes){
        res.send({clientes:clientes})
    }).catch(function(erro){
        res.send("Houve um erro ao buscar os clientes: " + erro);
    });

});

app.get("/:nome",function(req,res){
    Clientes.findAll({where: {'nome': req.params.nome}}).then(function(clientes){
        res.send({clientes:clientes})
    }).catch(function(erro){
        res.send("Houve um erro ao buscar os clientes: " + erro);
    });         
});

app.patch("/atualizar/:id", function(req, res){
    Clientes.update({
        nome: req.body.nome,    
        email: req.body.email,
        senha: req.body.senha,
        telefone: req.body.telefone 
    },{
        where: {id: req.params.id}
    }).then(function(){ 
        res.send("Cliente atualizado com sucesso!");
    }).catch(function(erro){
        res.send("Houve um erro ao atualizar o cliente: " + erro);
    });
});

app.delete("/deletar/:id", function(req, res){
    Clientes.destroy({
        where: {id: req.params.id}      
    }).then(function(){
        res.send("Cliente deletado com sucesso!");
    }).catch(function(erro){
        res.send("Houve um erro ao deletar o cliente: " + erro);
    });
}); 

const PORT= process.env.PORT || 8081;
app.listen(PORT,"0.0.0.0",function(){
    console.log("Servidor esta rodando...");
});