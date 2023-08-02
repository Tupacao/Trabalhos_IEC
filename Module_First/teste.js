//teste.js arquivo modularizado

const express = require('express')
const teste = express.Router()

teste.get('/one', (req,res) => {
    res.send("Página primeira")
})

teste.get('/second', (req,res) => {
    res.send("Segunda página")
})

module.exports = teste