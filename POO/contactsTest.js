// R8
const { Contacts } = require('./contacts');
const { Person } = require('./person');

// Crear un objeto de la clase Contacts
let Contacts1 = new Contacts();

// Crear  personas
let persona1 = new Person(["jugar", "bailar"], "Marta", "Sanchez", 2001, 70, 1.62);
let persona2 = new Person(["leer", "cocinar"], "Juan", "Pérez", 1995, 80, 1.75);

// Agregar personas a los contactos
Contacts1.addPerson(persona1);
Contacts1.addPerson(persona2);

// Imprimir los atributos de cada objeto Person
Contacts1.printPersons();