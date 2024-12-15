// // NOTA: No se pude usar el método .includes en ninguno de los retos.

// // A. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
// // La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// // La cabecera tendrá el aspecto: function zodiac(day:number, month:number):string


// function zodiac(day: number, month: number): string {
//     let resultado = "";

//     if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//         resultado = "Signo zodiacal: Aries";
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//         resultado = "Signo zodiacal: Tauro";
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//         resultado = "Signo zodiacal: Géminis";
//     } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//         resultado = "Signo zodiacal: Cáncer";
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//         resultado = "Signo zodiacal: Leo";
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//         resultado = "Signo zodiacal: Virgo";
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//         resultado = "Signo zodiacal: Libra";
//     } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//         resultado = "Signo zodiacal: Escorpio";
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//         resultado = "Signo zodiacal: Sagitario";
//     } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//         resultado = "Signo zodiacal: Capricornio";
//     } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//         resultado = "Signo zodiacal: Acuario";
//     } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//         resultado = "Signo zodiacal: Piscis";
//     } else {
//         resultado = "Fecha no válida";
//     }

//     return resultado;
// }

// //Comprobación
// console.log(zodiac(23, 5));




      
// // B. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// // estás. (Max 5 países por continente).
// // La cabecera tendrá el siguiente aspecto: function continent(country:string)

// 3// Función que de si ese país pertenece a ese continente. Si no está, 
// //que imprime no existe



// function continentePais(country: string): string {
//     let resultado = "";
    
//     if (country === "España" ) {
//     resultado = "Pertenece a Europa";} 
//     else if (country === "República Checa") {
//         resultado = "Pertenece a Europa"}
//     else if (country === "Noruega") {
//         resultado = "Pertenece a Europa"}
//     else if (country === "Italia") {
//         resultado = "Pertenece a Europa"}
//     else if (country === "Rumanía") {
//         resultado = "Pertenece a Europa"}
//     else if (country === "Polonia") {
//         resultado = "Pertenece a Europa"}
  

//     else if (country === "República Dominicana") {
//         resultado = "Pertenece a América"}
//     else if (country === "Colombia") {
//         resultado = "Pertenece a América"}
//     else if (country === "Canadá") {
//         resultado = "Pertenece a América"}
//     else if (country === "ARGENTINA") {
//         resultado = "América"}

//     else if (country === "China") {
//         resultado = "Pertenece a Asia"}
//     else if (country === "Korea") {
//         resultado = "Asia"}
//     else if (country === "Korea") {
//         resultado = "Tailandia"}
//     else if (country === "Korea") {
//         resultado = "Rusia"}


//     else if (country === "Australia") {
//         resultado = "Pertenece a Oceanía"}
//     else if (country === "Fiji") {
//         resultado = "Pertenece a Oceanía"}
//     else if (country === "Kiribati.") {
//         resultado = "Pertenece a Oceanía"}
//     else if (country === "Micronesie.") {
//         resultado = "Pertenece a Oceanía"}

//     else if (country === "Sudádrica") {
//         resultado = "Pertenece a África"}
//     else if (country === "Etipoía") {
//         resultado = "Pertenece a África"}
//     else if (country === "Mozambique") {
//         resultado = "Pertenece a África"}
//     else if (country === "Líbano") {
//         resultado = "Pertenece a África"}
//     else if (country === "Marruecos") {
//         resultado = "África";
// } else {
//     resultado = "Este país no está en el registro o no existe";
// }
//     return resultado;
// }

// //Comprobación
// console.log(continentePais("España"));


// C. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el número introducido como parámetro de entrada es par
// - “El numero es impar”, si el número introducido como parámetro de entrada es impar

// La cabecera de la función tendrá el siguiente aspecto: function isEven(num:number)

function isEven(num: number):string{
    let resultado = "";
    
if (num%2===0) {
    resultado = "El número es par";} 
else {
    resultado = "El número es impar";
} 
    return resultado;
}

//Comprobación
// console.log(isEven(4));

export {isEven};