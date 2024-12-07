//R7
const { Person } = require('./person'); // Importar la clase Person

class Contacts {
    constructor() {
        this.persons = []; // Inicializar el array de personas
    }

    //agrego persona
    addPerson(person) {
        this.persons.push(person);
    }

    //imprimir los atributos de cada objeto Person
    printPersons() {
        this.persons.forEach(person => {
            person.printAll(); // Llamo a  printAll
        });
    }
}


module.exports = { Contacts };