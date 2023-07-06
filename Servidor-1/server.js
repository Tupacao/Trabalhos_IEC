const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect(function(error) {
  if (error) {
    console.log('Deu pau:', error);
  } else {
    console.log('Conexão estabelecida com sucesso!');
  }
});

connection.query('CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))', function(error, results) {
  if (error) {
    console.log('Deu pau na criação da tabela:', error);
  } else {
    console.log('Tabela criada com sucesso!');
  }
});

module.exports = connection;