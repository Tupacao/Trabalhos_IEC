const express = require('express')
const app = express()

//uso do next para poder executar uma função logo após outra em um mesmo app

app.use((req,res,next) => {
    console.log(req.method)
    next()
}, (req,res,next) => {
    console.log('foi');
    next()
})

//uso do next no fina para poder seguir a linha de cósdigo e executar o app.get

app.get('/', (req,res, next) => {
    res.send('<strong> Bem Vindo </strong>')
    next()
})

const port = 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})