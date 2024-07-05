var Toastify = require("toastify-js");

function alertaAdicionarNovoCliente() {
  Toastify({
    text: "Cliente adicionado com sucesso 🏆!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
}

module.exports = alertaAdicionarNovoCliente
