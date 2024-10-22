//RETOS

//R1
// class Person
// {
//     constructor(nombre, apellidos, peso, altura,pelo){
//         this.viva = 
//         this.nombre = nombre
//         this.apellidos = apellidos
//         this.fechanacimiento
//         this.nacionalidad 
//         this.peso = peso
//         this.altura = altura
//         this.pelo = pelo
//         this.colorpelo 
//         this.piel
//         this.colorpiel
//         this.miembrosfamilia
//         this.amigos
//         this.creencias
//         this.profesion
//         this.propiedades

//     } 
// }



//R2
// class Person
// {
//     constructor(nombre, apellidos, peso, altura,pelo){
//         this.viva = 
//         this.nombre = nombre
//         this.apellidos = apellidos
//         this.fechanacimiento
//         this.nacionalidad 
//         this.peso = peso
//         this.altura = altura
//         this.pelo = pelo
//         this.colorpelo 
//         this.piel
//         this.colorpiel
//         this.miembrosfamilia
//         this.amigos
//         this.creencias
//         this.profesion
//         this.propiedades
//     }

//     IMC(){
//         let resultado = this.peso/(this.altura**2);
//         console.log(resultado);
//         return resultado;
//         }
    
// }

// //Comprobación
// let persona1 = new Person("Marta", "Sanchez", 70, 1.62,);
// console.log(persona1);

// persona1.IMC();



//Fomrula del IMC: 
//IMC = Peso (kg) / altura (m)2


// //R3
// class Person
// {
//     constructor(nombre, apellidos,yearOfBirth, peso, altura,pelo){
//         this.viva = 
//         this.nombre = nombre
//         this.apellidos = apellidos
//         this.yearOfBirth = yearOfBirth
//         this.nacionalidad 
//         this.peso = peso
//         this.altura = altura
//         this.pelo = pelo
//         this.colorpelo 
//         this.piel
//         this.colorpiel
//         this.miembrosfamilia
//         this.amigos
//         this.creencias
//         this.profesion
//         this.propiedades
//     }

//     IMC(){
//         let resultado = this.peso/(this.altura**2);
//         console.log(resultado);
//         return resultado;
//         }

//     Edad(){
//         let resultado = 2024 - this.yearOfBirth;
//         console.log(resultado);
//         return resultado;
//     }
    
// }

// //Comprobación
// let persona1 = new Person("Marta", "Sanchez",2001, 70, 1.62);
// console.log(persona1);

// persona1.IMC();
// persona1.Edad();


// //R4
// class Person
// {
//     constructor(nombre, apellidos,yearOfBirth, peso, altura,pelo){
//         this.viva 
//         this.nombre = nombre
//         this.apellidos = apellidos
//         this.yearOfBirth = yearOfBirth
//         this.nacionalidad 
//         this.peso = peso
//         this.altura = altura
//         this.pelo = pelo
//         this.colorpelo 
//         this.piel
//         this.colorpiel
//         this.miembrosfamilia
//         this.amigos
//         this.creencias
//         this.profesion
//         this.propiedades
//     }

//     IMC(){
//         let resultado = this.peso/(this.altura**2);
//         console.log(resultado);
//         return resultado;
//         }

//     Edad(){
//         let resultado = 2024 - this.yearOfBirth;
//         console.log(resultado);
//         return resultado;
//     }

//     printAll(){
//         let resultado = this.viva + "-" + this.nombre + "-" +
//         this.apellidos + "-" + this.yearOfBirth + "-" + this.nacionalidad
//         + "-" + this.peso + "-" + this.altura + "-" + this.pelo + "-" +
//         this.colorpelo + "-" + this.piel + "-" + this.colorpiel + "-" +
//         this.miembrosfamilia + "-" +this.amigos + "-" +this.creencias + "-" +
//         this.profesion+ "-" + this.propiedades;
//         console.log(resultado);
//         return resultado;
//     }
    
// }

// //Comprobación
// let persona1 = new Person("Marta","Sanchez",2001, 70, 1.62);
// console.log(persona1);

// persona1.IMC();
// persona1.Edad();
// persona1.printAll();


//R5
//R4
class Person
{
    constructor(hobbies, nombre, apellidos,yearOfBirth, peso, altura,pelo){
        this.viva
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

    IMC(){
        let resultado = this.peso/(this.altura**2);
        console.log(resultado);
        return resultado;
        }

    Edad(){
        let resultado = 2024 - this.yearOfBirth;
        console.log(resultado);
        return resultado;
    }

    printAll(){
        let resultado = this.viva + "-" + this.nombre + "-" +
        this.apellidos + "-" + this.yearOfBirth + "-" + this.nacionalidad
        + "-" + this.peso + "-" + this.altura + "-" + this.pelo + "-" +
        this.colorpelo + "-" + this.piel + "-" + this.colorpiel + "-" +
        this.miembrosfamilia + "-" +this.amigos + "-" +this.creencias + "-" +
        this.profesion+ "-" + this.propiedades;
        console.log(resultado);
        return resultado;
    }

    printHobbies(){
        let resultado = this.hobbies;
        console.log(resultado);
        return resultado; 

    }
    
}

//Comprobación
let persona1 = new Person(["jugar", "bailar", "leer", "pintar"], "Marta","Sanchez",2001, 70, 1.62);
console.log(persona1);

persona1.IMC();
persona1.Edad();
persona1.printAll();
persona1.printHobbies();
