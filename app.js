const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Seja Bem-vindo ao nosso site!");
}
);

app.get('/sobre',function(req,res){
    res.send("Aqui é a página sobre nós.");
}
);  
app.get('/contato',function(req,res){
    res.send("Entre em contato conosco!");
}
);





app.listen(8081,function(){
    console.log("Servidor esta rodando...");
});