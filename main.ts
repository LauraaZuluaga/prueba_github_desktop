import { Estudiante } from "./estudiante";

// Creacion de un arreglo de objetos tipo estudiante

const estudiantes: Estudiante[] = [
    new Estudiante("Juan", 20, 85),
    new Estudiante("Maria", 22, 55),
    new Estudiante("Pedro", 19, 90),
    new Estudiante("Ana", 21, 75),
    new Estudiante("Luis", 23, 40),
];


// Filtar estudiantes con una nota mayor o igual a 60
const estudiantesAprobados = estudiantes.filter((estudiante) => estudiante.nota >= 60);
console.log("Estudiantes aprobados: ", estudiantesAprobados);

//Ordenar estudiantes por nota(mayor o menor)
const estudiantesOrdenados = estudiantes.sort((a, b ) => b.nota - a.nota);
console.log("Estudiantes ordenados por nota: ", estudiantesOrdenados);

//Obtener un arreglo con los nombre de los estudiantes
const nombresEstudiantes = estudiantes.map((estudiante ) => estudiante.nombre);
console.log("Nombres estudiantes: ", nombresEstudiantes);