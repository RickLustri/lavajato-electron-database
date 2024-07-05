const alertaAdicionarNovoCliente = require("../scripts/alerta");
var bancoDeDados = require("../scripts/banco-de-dados");


function adicionarProduto(event) {
  event.preventDefault();
  var cliente = document.getElementById('cliente').value
  var carro = document.getElementById('carro').value
  var placa = document.getElementById('placa').value
  var queryAdicionar = `INSERT INTO clientes (cliente, carro, placa) VALUES ('${cliente}', '${carro}', '${placa}')`
  bancoDeDados.query(queryAdicionar, function (error) {
    if (error) {
      console.log(`Ocorreu um erro ao adicionar o cliente: ${error.code}`);
      console.log(`Ocorreu um erro ao adicionar o cliente: ${error.fatal}`);
    } else {
      console.log("Cliente adicionado com sucesso!");
      alertaAdicionarNovoCliente()
      
    }
  })
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)