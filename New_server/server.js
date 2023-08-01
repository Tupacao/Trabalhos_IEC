const express = require('express');
const app = express();

//cadeia de next para poder saber como funciona e em que método 

// Middleware 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

// Rota GET
app.get('/', (req, res, next) => {
  console.log('Rota GET');
  next();
});

// Rota POST
app.post('/', (req, res, next) => {
  console.log('Rota POST');
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

// Resposta final
app.use((req, res) => {
  res.send('Resposta final');
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
