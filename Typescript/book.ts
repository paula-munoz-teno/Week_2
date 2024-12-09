

export class Book
{
    // Definición de atributos (qué atributos tiene la clase)
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
    //(si queremos que se modifique cada vez que se cree el objeto usamos param)
    //el constructor por defecto es público

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    // Implementación de los métodos

//GETTERS
    public getTitle():string{
        return this.title;
    }

    public getnPages():number{
        return this.nPages;
    }

    public getIsbn():string{
        return this.isbn;
    }

    public getAuthor():string{
        return this.author;
    }

    public getEditorial():string{
        return this.editorial;
    }

    //sería igual poner:

    public  get Editorial():string{
        return this.editorial;
    }

//SETTERS
    //set: modificar
    //:void (no devuelve nada)
    //el param tiene que corresponderse con lo que se iguala
    setTitle(title:string):void{
        this.title = title;
    }

    setnPages(nPages:number):void{
        this.nPages = nPages;
    }
    setIsbn(isbn:string):void{
        this.isbn = isbn;
    }
    setAuthor(author:string):void{
        this.author = author;
    }
    setEditorial(editorial:string):void{
        this.editorial = editorial;
    }

    //tostring

public toString():string{
   return  "Title -" + this.title + "\n" +
           "Number of Pages -" + " " + this.nPages + "\n" +
           "ISBN -"+ " "  + this.isbn + "\n" +
           "Author -" + " " + this.author + "\n" +
           "Edithorial -" + " " + this.editorial;
}

}


//los métodos get y set son muy importantes dentro de las clases y SOLO tienen sentido si los métodos son privados  
//los atributos privados son aquellos a los que hay que acceder mediante getter y setter 
//Buena praxis todos atributos privados y que se implementen getter y setter










