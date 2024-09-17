const pedidos = [
    { nombreCliente: "Juan", tipo: "comida", precio: 15, cantidad: 2},
    { nombreCliente: "Carlos", tipo: "bebida", precio: 5, cantidad: 1},
];

// Arrow function anonima para calcular el total de cada pedido. precio * cantidad
const totalesPedidos = pedidos.map(pedido => pedido.precio * pedido.cantidad); // El map nos recorre el array original y nos da un nuevo array con los resultados de la operacion.
console.log('Totales por pedido: $(totalesPedidos)'); 

// Arrow function anonima para filtrar solo los pedidos de comida.
const pedidosComida = pedidos.filter(pedido => pedido.tipo == "comida");
console.log("Pedidos de comida: ", pedidosComida);

// Crear una funcion nombrada tipo flecha. Calcular costo total de los pedidos
const calcularTotal = () => {
    return pedidos.reduce((suma, pedido) => suma + (pedido.precio * pedido.cantidad),0) //Reduce un array a un valor unico. Funciona como un acumulador.
};

console.log('Costo total de todos los pedidos: $(calcularTotal())');

// Arrow function nombrada para mostrar un resumen de los pedidos
const mostrarResumen = () => {
    console.log('Resumen pedidos:')

    pedidos.forEach(pedido => (
        console.log(pedido.nombreCliente, "ha pedido ",pedido.cantidad, pedido.tipo, "por un total de ", pedido.precio * pedido.cantidad, "dolares")
        )
    );
};

mostrarResumen();