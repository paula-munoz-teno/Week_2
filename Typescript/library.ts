
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

    constructor(adress:string, manager:string){
        this.books = [];
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
    this.books.push(book);
}
    
}

//los métodos get y set son muy importantes dentro de las clases y SOLO tienen sentido si los métodos son privados  
//los atributos privados son aquellos a los que hay que acceder mediante getter y setter 
//Buena praxis todos atributos privados y que se implementen getter y setter










