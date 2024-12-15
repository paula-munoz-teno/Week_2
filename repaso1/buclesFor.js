"use strict";
// // // A. Realizar una función que imprima los números impares existentes desde el númeor 0 hasta
// // // el número indicado como parámetro de entrada.
// // // La cabecera tendrá el siguiente aspecto: function evenNumbers(num:number)
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
// function evenNumber(num:number):void{
//     for(let i = 1; i <= num; i +=2){
// console.log(i);
//     }
// };
// (evenNumber(3));
// // // B. Realizar una función que como parámetro de entrada reciba un array de strings y como
// // // salida devuelva el array revertido. No se puede utilizar el método revert de la clase array
// // // La cabecera tendrá el siguiente aspecto: function myRevert(myArr:string[]):string[]
// function myRevert(myArr:string[]):string[]{
//     let  arrayRevert:string[] = [];
//     for (let i = myArr.length -1; i>=0; i--){
//         arrayRevert.push(myArr[i]); 
//     }
//     return arrayRevert
// }
// console.log(myRevert(["rojo", "naranja", "amarillo", "verde", "azul", "morado"]))
// // // C. Realizar una función que reciba como parámetro un array de strings que contenga nombres
// // // de colores y te imprima en cada caso si el color está en el arcoíris o no.
// // // La cabecera tendrá el siguiente aspecto: function isRainbow(colors:string[])
// function isRainbow(colors:string[]):void{
//     let arcoiris = ["rojo", "naranja", "amarillo", "verde", "azul", "morado"]
//     for (let i =0; i<colors.length; i++){
//         if (colors[i] == arcoiris[0]){
//         console.log("el color está en el arcoiris")
//         }
//         else if(colors[i] == arcoiris[1]){
//             console.log("el color está en el arcoiris")
//         } 
//         else if(colors[i] == arcoiris[2]){
//             console.log("el color está en el arcoiris")
//         } 
//         else if(colors[i] == arcoiris[3]){
//             console.log("el color está en el arcoiris")
//         } 
//         else if(colors[i] == arcoiris[4]){
//             console.log("el color está en el arcoiris")
//         } 
//         else if(colors[i] == arcoiris[5]){
//             console.log("el color está en el arcoiris")
//         } 
//         else {console.log("el color NO está en el arcoiris")}
//      }
// }
// isRainbow(["rosa", "rojo","azul"]);
// // // D. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// // // almacenadas en un array.
// // // La cabecera tendrá el siguiente aspecto: function add(myWords:string[]):number
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    return suma;
}
