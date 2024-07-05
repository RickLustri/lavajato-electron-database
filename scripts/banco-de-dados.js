// Importando o módulo mysql2
var mysql = require("mysql2");

// Configuração para acessar o banco de dados
var bancoDeDados = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lava-jato",
});

// Verificar conexão com o banco de dados
bancoDeDados.connect(function (error) {
  if (error) {
    console.log(`Ocorreu um erro ao conectar no banco de dados: ${error.code}`);
    console.log(
      `Ocorreu um erro ao conectar no banco de dados: ${error.fatal}`
    );
  } else {
    console.log("Conectado ao banco de dados com sucesso!");
  }
});

module.exports = bancoDeDados;