//RETOS


// clases primer letra en mayus 
// class Person

//R1
class Person
{
    constructor(hobbies, nombre, apellidos,yearOfBirth, peso, altura,pelo){
        this.viva = true
        this.hobbies = hobbies
        this.nombre = nombre
        this.apellidos = apellidos
        this.yearOfBirth = yearOfBirth
        this.nacionalidad 
        this.peso = peso
        this.altura = altura
        this.pelo = pelo
        this.colorpelo 
        this.piel
        this.colorpiel
        this.miembrosfamilia
        this.amigos
        this.creencias
        this.profesion
        this.propiedades
    }
//R2
    IMC(){
        let resultado = this.peso/(this.altura**2);
        console.log("IMC:"+ resultado);
        return resultado;
        }
    
//R3
    calcularEdad(año){
        let resultado = año - this.yearOfBirth;
        console.log("La edad es de "  + resultado + " años");
        return resultado;
    }


//R4
    printAll(){
        let resultado = this.viva + "-" + this.nombre + "-" +
        this.apellidos + "-" + this.yearOfBirth + "-" + this.nacionalidad
        + "-" + this.peso + "-" + this.altura + "-" + this.pelo + "-" +
        this.colorpelo + "-" + this.piel + "-" + this.colorpiel + "-" +
        this.miembrosfamilia + "-" +this.amigos + "-" +this.creencias + "-" +
        this.profesion+ "-" + this.propiedades;
        console.log("los atributos son: " + resultado);
        return resultado;
    }
    
//R5 
    printHobbies(){
        let resultado = this.hobbies;
        console.log("las aficiones son: " + resultado);
        return resultado; 

    }
}

//Comprobación
// let persona1 = new Person("Marta","Sanchez",2001, 70, 1.62);
// console.log(persona1);
let persona1 = new Person(["jugar", " bailar", " leer" + " y " + "pintar"], "Marta","Sanchez",2001, 70, 1.62);
let persona2 = new Person(["correr", " leer" + " y " + "andar"],"Julio", "Muñoz", 1964, 90, 1.72);



persona1.IMC();
persona1.calcularEdad(2024);
persona1.printAll();
persona1.printHobbies();

persona2.IMC();
persona2.calcularEdad(2024);
persona2.printAll();
persona2.printHobbies();


//R6
module.exports = {Person};


//R7

// class Contacts
// {
//     constructor(){
//         this.Persons

// }

// printPersons(){
//     let resultado = this.Persons;
//     console.log("mis contactos son:" + resultado);
//     return resultado
 
// }

// }


// let Contacts = new Contacts([, , ])

    
//R2


//R8
