"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // Implementación de los métodos
    //GETTERS
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Object.defineProperty(Book.prototype, "Editorial", {
        //sería igual poner:
        get: function () {
            return this.editorial;
        },
        enumerable: false,
        configurable: true
    });
    //SETTERS
    //set: modificar
    //:void (no devuelve nada)
    //el param tiene que corresponderse con lo que se iguala
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    //tostring
    Book.prototype.toString = function () {
        return "Title -" + this.title + "\n" +
            "Number of Pages -" + " " + this.nPages + "\n" +
            "ISBN -" + " " + this.isbn + "\n" +
            "Author -" + " " + this.author + "\n" +
            "Edithorial -" + " " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
//los métodos get y set son muy importantes dentro de las clases y SOLO tienen sentido si los métodos son privados  
//los atributos privados son aquellos a los que hay que acceder mediante getter y setter 
//Buena praxis todos atributos privados y que se implementen getter y setter
