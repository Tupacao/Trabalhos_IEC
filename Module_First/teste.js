//teste.js arquivo modularizado

const express = require('express')
const teste = express.Router()

teste.get('/one', (res,req) => {
    res.send("Página primeira")
})

teste.get('/second', (req,res) => {
    res.send("Segunda página")
})

module.export = teste