"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var library_1 = require("./library");
//COMPROBACIÓN
var book1 = new Book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var book2 = new Book_1.Book("Introducción a la vida", 240, "2344433-BC22222", "Julia Smith", "Now Editions");
var booksA = [book1, book2];
var adressA = "Calle de la flor, 5";
var manegerA = "Juan Carlos García";
var library1 = new library_1.Library(booksA, adressA, manegerA);
// console.log(library1.toString());
// console.log("el número de libros de library1 es:" + library1.getNumberofBooks());
console.log("los libros que tienen como auutora a Julia Smith son:" +
    library1.findByAuthor("Julia Smith"));
