const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if(error){
            res.writeHead(404)
            res.write('Não deu meu bom')
        }
        else{
            res.write(data)
        }
        res.end();
    })
})

server.listen(port, function (error){
    if(error){
        console.log('Please retry men', error)
    }
    else{
        console.log('Ta acontecendo algo irmao na porta: ' + port)
    }
})