// Requisitos:
// Crear una clase estudiante
// Almacenar varios objetos de estudiante en un arreglo
// Vamos a usar metodos de arrays
// Filtrar a los estudiantes con una nota mayor o igual a 60
// Ordenar a los estudiantes por su nota 
// Obtener un arreglo con solo los nombres de los estudiantes
// Calcular la nota promedio de todos los estudiantes


// Definir la clase estudiante

export class Estudiante {
    nombre: string;
    edad: number;
    nota: number;

    constructor(nombre: string, edad: number, nota: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;

    }
}
