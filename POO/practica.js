//RETOS

//importar funciones 
// const miLib = require("./retost7");
// //esto importa 
// //meto fichero retost7 en el objeto miLib, así puedo acceder a ello 
// let persona1 = new miLib.Person("Marta", "Sanchez", 70, 1.62, "blanco");
// // console.log(persona1);

// persona1.IMC();

// const{Person, mifuncion} = require("./retost7")
// //aplicar el destructring con el nombre de mi clase 

// let persona1 = new Person("Marta", "Sanchez", 70, 1.62, "blanco");
// // console.log(persona1);

// persona1.IMC();
// console.log(mifuncion())
//siendo mi funcion una funcion real en el archivo retpst7

//también puedo importar funciones 

//R1
// clases primer letra en mayus 
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


//PRÁCTICA Y APUNTES 
//constructor permite: 
//def caract de los objetos de una clase
//dar valores iniciales

//las caract llevan delante un this
//this. nos permite crear un objeto de la clase coche de tal forma que todos los objetos de esa clase
//tengan las = caract 



//CREAR OBJETO de x clase (clase persona)(si no existe param)

// let persona1 = new Person();
// let persona2 = new Person();

// //dar valor a ese atributo

// // persona1.piel = "blanca";
// // persona2.piel = "negra";

// console.log(persona1);
// console.log(persona2);


//DAR VALORES INICIALES 

//si son fijos sin param 
//igualando el atributo a una variable es variable será el valor inicial 
// ej: this.viva = true (la persona está viva, siempre lo va a estar )

//si son variables con param
//si quiero que los valores del atributo venga dado por los param 
//poner en los parámetros una variable 
//constructor (color){}
//ej: this.colorpiel = color; 
//this.colorpiel (es propiedad)
//(color) es un param 

//A los param se les dan los mismos nombres que a las propiedades 







//R2
class Person
{
    constructor(nombre, apellidos, peso, altura, colorpiel){
        this.viva = 
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechanacimiento
        this.nacionalidad 
        this.peso = peso
        this.altura = altura
        this.pelo 
        this.colorpelo 
        this.piel
        this.colorpiel = colorpiel
        this.miembrosfamilia
        this.amigos
        this.creencias
        this.profesion
        this.propiedades
    }

    printPropiedades(){
        console.log("nombre:" + this.nombre);
    }

    //ponemos this.porque estamos dentro de la clase 

    getPropiedades(){
        return this.nombre + ""+ this.apellidos;
    }

    calcularmelatonina(melatonina){
        let resultado = melatonina;
        if (this.colorpiel == "blanco"){
            resultado *= 0.90;
        }
        else if (this.colorpiel ==="negro"){
            resulatdo *= 1.10;
        }
        return resultado;

    }

    IMC(){
        let resultado = this.peso/(this.altura**2);
        console.log("IMC:" + resultado);
        return resultado;
        }
    
}

// //Comprobación
let persona1 = new Person("Marta", "Sanchez", 70, 1.62, "blanco");
// console.log(persona1);

persona1.printPropiedades();
//método sin param de entrada ni de salida 

console.log(persona1.getPropiedades());
//en get hace falta un console.log ya que la acción es obtener,
//si quiero saber lo que obtengo tengo que mostrarlo. Otra posibilidad es: 
let prop = (persona1.getPropiedades());
console.log(prop)

console.log(persona1.calcularmelatonina(200));
//la melatonina inicial es de 200, como es blanca, disminuye un 10% el valor de la melatonina 

persona1.IMC();
//es como hacer array.push()

//Fomrula del IMC: 
//IMC = Peso (kg) / altura (m)2

//ACCEDER A VALORES Y MÉTODOS 
//para acceder a objeto.valores o objeto.métodos FUERA de la clase
//en clase: this.valores  this.método DENTRO de la clase 

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
//constructor permite crear atributos de un objeto (por tanto, los objetos) 
//a partir de una clase 
//métodos acciones que pueden hacer los objetos que pertenecen a esa clase 
//propiedades son variables
//métodos son funciones 

//EJ: los objetos tipo array pueden usar las funciones .length o push


// class Person
// {
//     constructor(hobbies, nombre, apellidos,yearOfBirth, peso, altura,pelo){
//         this.viva
//         this.hobbies = hobbies 
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

//     printHobbies(){
//         let resultado = this.hobbies;
//         console.log(resultado);
//         return resultado; 

//     }
    
// }

// //Comprobación
// let persona1 = new Person(["jugar", "bailar", "leer", "pintar"], "Marta","Sanchez",2001, 70, 1.62);
// console.log(persona1);

// persona1.IMC();
// persona1.Edad();
// persona1.printAll();
// persona1.printHobbies();
