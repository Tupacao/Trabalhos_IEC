const express = require('express')
const app = express()
const apiRouter = require('./apiRouter')


app.use('/produtos', apiRouter)

app.get('/', (req,res) => {
    res.send('<h1> Página Inicial </h1>')
})

const port = 3000
app.listen(port, () => {
    console.log(`htp://localhost:${port}`)
})