
import { Vector } from "./vector"; 

let vector1 = new Vector(5, 10); // 
let vector2 = new Vector(5, 10); // 

//imprimir
console.log("Vector 1:");
vector1.print(); 

console.log("Vector 2:");
vector2.print();

// Sumar los vectores
let sumVector = vector1.add(vector2);
if (sumVector) {
    console.log("Suma de Vectores:");
    sumVector.print(); 
}

// Restar los vectores
let subVector = vector1.subs(vector2);
if (subVector) {
    console.log("Resta de Vectores:");
    subVector.print(); 
}

// Multiplicar los vectores
let multVector = vector1.mult(vector2);
if (multVector) {
    console.log("Multiplicación de Vectores:");
    multVector.print();
}

// Multiplicar un vector por un número
let multNumberVector = vector1.multNumber(2);
console.log("Multiplicación de Vector por 2:");
multNumberVector.print(); 