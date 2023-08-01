const express = require('express')
const app = express()
const bodyparser = require('body-parser')

//app.use(bodyparser.urlencoded({extended: false}))

app.use ((req, res, next) => {
    console.log (req.method, req.path, req.originalUrl)
    next()
})

app.get('/', (req, res, next) => {

    res.send(
        `
        <form action = "/resposta" method = "post">
            <input type = "text" id = "name" name = "name" placeholder = "Nome" required>
            <input type = "text" id = "email" name = "email" placeholder = "Email" required>
            <button type = "submit"> Enviar </button>
        </form>
        `
    )
})

app.post('/resposta', bodyparser.urlencoded({extended: false}), (req, res) => {
    const {name, email} = req.body
    res.send(
        `
        ${name} seus dados foram salvos <br> Nome: <strong>${name}</strong> <br> Email: <strong>${email}</strong>
        `
    )
})


const port = 3000

app.listen(port, () => {
    console.log(`Server aberto em: http://localhost:${port}`)
})