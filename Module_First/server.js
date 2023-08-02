//server.js arquivo principal

const express = require('express')
const app = express()
const teste = require('./teste') 

app.use('/modulo', teste)

app.get('/', (req,res) => {
    res.send('Inicio')
})

const port = 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})