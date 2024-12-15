// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:

import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let arrayC=["Casa", "Coche", "Ciudad", "Cesta"]
let arrayB=["Barco", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let arrayV=["Venezuela", "Veneno", "Voltaje"]


console.log("La suma de caracteres del array C es:" + 
    add (arrayC) + ". Por tanto:"+ isEven((add(arrayC))));

console.log("La suma de caracteres del array C es:" + 
    add (arrayB) + ". Por tanto:"+ isEven((add(arrayB))));
    
console.log("La suma de caracteres del array C es:" + 
    add (arrayV) + ". Por tanto:"+ isEven((add(arrayV))));
        
            

// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes.

// También tendrás que importar dichos ficheros en el fichero actual.

// Subir los cambios a GitHub. Y hacer merge con la rama principal.