// Arrow funtion anonima
// Funciones de flecha 

// Una función sin nombre y generalmente se asigna a una variable o tambien se pasa como argumento a otra funcion.
// Cuando necesitemos contexto especifico o usarla una sola vez

const sumar1 = (a: number, b: number): number => a + b;



// Arrow function nombrada

// Una funcion flecha. Se le asigna un nombre a traves de la variable
// El nombre de la funcion tambien está asociada a la variable pero sigue siendo un arrow function.

const multiplicar = (a: number, b: number): number => {
    return a * b
    console.log(multiplicar(5, 2))
}

