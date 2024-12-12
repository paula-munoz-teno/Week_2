
import {Book} from "./Book";

export class Library
{
    // Definición de atributos (qué atributos tiene la clase)
    private books: Book[];
    private adress: string;
    private manager: string;
   

    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público

    constructor(books:Book[], adress:string, manager:string){
        this.books = books;
        this.adress = adress;
        this.manager = manager;
    }

    //P: por qué no se pone como param

    // Implementación de los métodos

//GETTERS
   

    public getAdress():string{
        return this.adress;
    }

    public getManager():string{
        return this.manager;
    }

    

//SETTERS
    //set: modificar
    //:void (no devuelve nada)
    //el param tiene que corresponderse con lo que se iguala
    setAdress(adress:string):void{
        this.adress = adress;
    }

    setManager(manager:string):void{
        this.manager = manager;
    }
 
    //tostring

//agregar libro a la biblioteca 

public addBook(book:Book):void{
    console.log(this.books)
    this.books.push(book);  
}

public toString(): string {
    let result = "";
    this.books.forEach((book, i) => {
        result += `Title - ${book.getTitle()}\n`;
        result += `Number of Pages - ${book.getnPages()}\n`;
        result += `ISBN - ${book.getIsbn()}\n`;
        result += `Author - ${book.getAuthor()}\n`;
        result += `Editorial - ${book.getEditorial()}\n\n`; // Agregar un salto de línea entre libros
    });
    return result;
}


// - getNumberOfBooks ():number.
// Devuelve el numero de libros de la biblioteca.

public getNumberofBooks():number{
return this.books.length;
}


// - findByAuthor (author:string):Book[].
// Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
// del método.
//IMPORTANTE
    public findByAuthor(author: string): Book[] {
        // Filtrar los libros cuyo autor coincida con el nombre que se pasa como parámetro
        let coincidencia = this.books.filter(book => book.getAuthor() === author);
        
        // Si no hay libros que coincidan, puedes devolver un array vacío o lanzar un mensaje
        if (coincidencia.length === 0) {
            console.log("No hay libros que coincidan con el autor");
        }
        
        return coincidencia; // Devolver el array de libros que coinciden
    }

   
}






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




//los métodos get y set son muy importantes dentro de las clases y SOLO tienen sentido si los métodos son privados  
//los atributos privados son aquellos a los que hay que acceder mediante getter y setter 
//Buena praxis todos atributos privados y que se implementen getter y setter








