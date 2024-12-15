"use strict";
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arrayC = ["Casa", "Coche", "Ciudad", "Cesta"];
var arrayB = ["Barco", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var arrayV = ["Venezuela", "Veneno", "Voltaje"];
console.log("La suma de caracteres del array C es:" +
    (0, buclesFor_1.add)(arrayC) + ". Por tanto:" + (0, condicionales_1.isEven)(((0, buclesFor_1.add)(arrayC))));
console.log("La suma de caracteres del array C es:" +
    (0, buclesFor_1.add)(arrayB) + ". Por tanto:" + (0, condicionales_1.isEven)(((0, buclesFor_1.add)(arrayB))));
console.log("La suma de caracteres del array C es:" +
    (0, buclesFor_1.add)(arrayV) + ". Por tanto:" + (0, condicionales_1.isEven)(((0, buclesFor_1.add)(arrayV))));
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.
// También tendrás que importar dichos ficheros en el fichero actual.
// Subir los cambios a GitHub. Y hacer merge con la rama principal.
