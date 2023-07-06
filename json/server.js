//npm init -y
//npm install --save mysql express


//Puxei as bibliotecas
const express = require('express')
const mysql = require('mysql')
const server = express()

//setando a porta
const port = 3000;

//Criando conexão com o site pra fazer uma database
const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    passworld : '1234',
})


//conectar a base de dados
db.connect(function(error){
    if(error){
        console.log("Deu ruin 1")
    }
    else{
        console.log("abriu a database")
    }
});


//criar a base de dados
server.get('/database', function(req, res){
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, function (error, result){
        if(error) console.log('eca');
        console.log(result);
        res.send('Achou');
    });
});

//criar a parte para salvar as postagens
server.get('/postagens', function(req,res){
    let sql = 'CREATE POSTAGENS posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, function(error, result){
        if(error) console.log('ruin2');
        console.log(result);
        res.send('Postagem feita')
    })
})


//criar a base de dados
server.get('/seta_info', function (req, res){
    let post = {id:'1', description: 'que legal'};
    let sql = 'INSERT INTO post SET ?'
    let query = db.query(sql, function(error, result){
        if(error) console.log('aaaaaa');
        console.log(result);
        res.send('foi criado');
    })
})


//pegar a informação guardada
server.get('/get_info', function (res,req){
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, function (erro, result){
        if(erro) console.log("acaboua acriatividade")
        console.log(result);
        res.send('Peguei pra tu')
    });
})

//fazer atualização na base de dados
server.get('/update_info/:id', function (res,req){
    let newTitle = 'opa filhao'
    let sql = `UPDATE posts SET title = ${newTitle} WHERE id = ${req.params.id}`;
    let query = db.query(sql, function (erro, result){
        if(erro) console.log("acaboua acriatividade")
        console.log(result);
        res.send('Updaitei')
    });
})

//deletar a base de dados
server.get('/delete_info/:id', function (res,req){
    let newTitle = 'opa filhao'
    let sql = `DELETE FROM post WHERE id = ${req.params.id}`;
    let query = db.query(sql, function (erro, result){
        if(erro) console.log("acaboua acriatividade")
        console.log(result);
        res.send('Deletei')
    });
})

//botar o server no ar
server.listen(port, function () {
    console.log("ta funfando")
})

//node nome.js