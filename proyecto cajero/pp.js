const clientes = [
    { nombre: "cristian", pin: 1234, saldo: 1500 },
    { nombre: "paola", pin: 5678, saldo: 2000 },
    { nombre: "nicolas", pin: 9012, saldo: 3000 }
];

const nombreCliente = sessionStorage.getItem('nombreCliente');
const clienteActual = clientes.find(cliente => cliente.nombre === nombreCliente);
const saldoSpan = document.getElementById('saldo');

if (clienteActual) {
    saldoSpan.textContent = clienteActual.saldo;
} else {
    saldoSpan.textContent = 'N/A';
}