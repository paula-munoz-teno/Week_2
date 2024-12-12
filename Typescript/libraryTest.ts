import {Book} from "./Book";
import { Library } from "./library";
//COMPROBACIÓN
let book1: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2: Book = new Book("Introducción a la vida", 240, "2344433-BC22222", "Julia Smith", "Now Editions");
let booksA: Book[] = [book1, book2];
let adressA: string = "Calle de la flor, 5";
let manegerA: string = "Juan Carlos García"

let library1: Library = new Library (booksA, adressA, manegerA );

console.log(library1.toString());

console.log("el número de libros de library1 es:" + library1.getNumberofBooks());

console.log("los libros que tienen como autora a Julia Smith son:" +
    library1.findByAuthor("Julia Smith"));