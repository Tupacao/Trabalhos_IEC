const express = require('express')
const apiRouter = express.Router()

const lista_produtos = [
    {id: 1, nome: "Angelo", idade: 18},
    {id: 2, nome: "Bertan", idade: 22},
    {id: 3, nome: "Contradir", idade: 35}
]

apiRouter.get('/dados', (req,res) => {
    res.json(lista_produtos)
})

apiRouter.get('/id', (req,res) => {
    let string = '';
    for (let i = 0; i < lista_produtos.length; i++) {
        const element = lista_produtos[i];
        string += `id ${i+1}: ${element.id} <br>`   
    }
    res.send(string)
})

apiRouter.get('/nome', (req,res) => {
    let string = '';
    for (let i = 0; i < lista_produtos.length; i++) {
        const element = lista_produtos[i];
        string += `Nome ${i+1}: ${element.nome} <br>`   
    }
    res.send(string)
})

apiRouter.get('/idade', (req,res) => {
    let string = '';
    for (let i = 0; i < lista_produtos.length; i++) {
        const element = lista_produtos[i];
        string += `Idade ${i+1}: ${element.idade} <br>`   
    }
    res.send(string)
})

module.exports = apiRouter