const bancoDeDados = require("../scripts/banco-de-dados");

// Buscar todos os produtos
var queryBuscar = "SELECT * FROM clientes";

bancoDeDados.query(queryBuscar, function (error, clientes) {
  if (error) {
    console.log(`Ocorreu um erro ao buscar os clientes: ${error.code}`);
    console.log(`Ocorreu um erro ao buscar os clientes: ${error.fatal}`);
  } else {
    clientes.forEach((produto) => {
      var novaLinha = tbody.insertRow();

      var celulaCliente = novaLinha.insertCell(0);
      var celulaCarro = novaLinha.insertCell(1);
      var celulaPlaca = novaLinha.insertCell(2);

      celulaCliente.innerText = produto.cliente;
      celulaCarro.innerText = produto.carro;
      celulaPlaca.innerText = produto.placa;
    });
  }
});
