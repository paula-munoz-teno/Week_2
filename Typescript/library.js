"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público
    function Library(books, adress, manager) {
        this.books = books;
        this.adress = adress;
        this.manager = manager;
    }
    //P: por qué no se pone como param
    // Implementación de los métodos
    //GETTERS
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    //SETTERS
    //set: modificar
    //:void (no devuelve nada)
    //el param tiene que corresponderse con lo que se iguala
    Library.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    //tostring
    //agregar libro a la biblioteca 
    Library.prototype.addBook = function (book) {
        console.log(this.books);
        this.books.push(book);
    };
    Library.prototype.toString = function () {
        var result = "";
        this.books.forEach(function (book, i) {
            result += "Title - ".concat(book.getTitle(), "\n");
            result += "Number of Pages - ".concat(book.getnPages(), "\n");
            result += "ISBN - ".concat(book.getIsbn(), "\n");
            result += "Author - ".concat(book.getAuthor(), "\n");
            result += "Editorial - ".concat(book.getEditorial(), "\n\n"); // Agregar un salto de línea entre libros
        });
        return result;
    };
    // - getNumberOfBooks ():number.
    // Devuelve el numero de libros de la biblioteca.
    Library.prototype.getNumberofBooks = function () {
        return this.books.length;
    };
    // - findByAuthor (author:string):Book[].
    // Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
    // del método.
    // public findbyAuthor(Author):string{
    //     let result = "";
    //     if (Author == Author){
    //     this.books.forEach((book, i) => {
    //         result += `Title - ${book.getTitle()}\n`;
    //         result += `Number of Pages - ${book.getnPages()}\n`;
    //         result += `ISBN - ${book.getIsbn()}\n`;
    //         result += `Author - ${book.getAuthor()}\n`;
    //         result += `Editorial - ${book.getEditorial()}\n\n`; // Agregar un salto de línea entre libros
    //     });
    // }
    // else{console.log("No hay libros que coincidan con el autor")}
    //     return result;
    // / Método para encontrar libros por autor
    Library.prototype.findByAuthor = function (author) {
        // Filtrar los libros cuyo autor coincida con el nombre que se pasa como parámetro
        var matchingBooks = this.books.filter(function (book) { return book.getAuthor() === author; });
        // Si no hay libros que coincidan, puedes devolver un array vacío o lanzar un mensaje
        if (matchingBooks.length === 0) {
            console.log("No hay libros que coincidan con el autor");
        }
        return matchingBooks; // Devolver el array de libros que coinciden
    };
    Library.prototype.toString = function () {
        var result = "";
        this.books.forEach(function (book, i) {
            result += "Title - ".concat(book.getTitle(), "\n");
            result += "Number of Pages - ".concat(book.getnPages(), "\n");
            result += "ISBN - ".concat(book.getIsbn(), "\n");
            result += "Author - ".concat(book.getAuthor(), "\n");
            result += "Editorial - ".concat(book.getEditorial(), "\n\n"); // Agregar un salto de línea entre libros
        });
        return result;
    };
    return Library;
}());
exports.Library = Library;
