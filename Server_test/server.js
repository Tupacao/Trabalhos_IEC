const express = require ('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Pedido sendo encaminhado</h1>')
})

const port = 3000
app.listen(port, (error) => {
    if(error){
        console.log('DEU ERRO: ', error);
    }
    else{
        console.log('http://localhost:',port);
    }
})