"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector"); // Asegúrate de que la ruta sea correcta
var vector1 = new vector_1.Vector(5, 10); // Vector de longitud 5 con valores entre 0 y 10
var vector2 = new vector_1.Vector(5, 10); // Otro vector de longitud 5 con valores entre 0 y 10
//imprimir
console.log("Vector 1:");
vector1.print();
console.log("Vector 2:");
vector2.print();
// Sumar los vectores
var sumVector = vector1.add(vector2);
if (sumVector) {
    console.log("Suma de Vectores:");
    sumVector.print();
}
// Restar los vectores
var subVector = vector1.subs(vector2);
if (subVector) {
    console.log("Resta de Vectores:");
    subVector.print();
}
// Multiplicar los vectores
var multVector = vector1.mult(vector2);
if (multVector) {
    console.log("Multiplicación de Vectores:");
    multVector.print();
}
// Multiplicar un vector por un número
var multNumberVector = vector1.multNumber(2);
console.log("Multiplicación de Vector por 2:");
multNumberVector.print();
