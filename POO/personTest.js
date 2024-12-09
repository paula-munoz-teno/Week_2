const{Person} = require("./person")
//aplicar el destructring con el nombre de mi clase 

let persona2 = new Person(["correr", " leer" + " y " + "andar"],"Julio", "Muñoz", 1964, 90, 1.72);
// console.log(persona1);

persona2.IMC();
persona2.calcularEdad(2024);
persona2.printAll();
persona2.printHobbies();

