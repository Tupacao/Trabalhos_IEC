const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Estou usando:',req.method)
    next()
})

app.get('/', (req, res) => {
    res.send(
        `
        <form action = "/resposta" method = "post">
            <input placeholder = "Nome" name = "name" type = "text" required>
            <br>
            <input placeholder = "Email" name = "email" type = "text" required>
            <br>
            <button type = "submit"> Ok </button>
        </form>
        `
    )
})

app.use('/resposta', (req, res, next) => {
    console.log('pedicao feita')
    next()
})

app.post ('/resposta', (req,res) => {
    res.send('Coletado')
})

const port = 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})