import {Book} from "./Book";
//COMPROBACIÓN
let myBook: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(myBook.getTitle());
console.log(myBook.getnPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());




(myBook.setTitle("Un verso"));
(myBook.setnPages(400));
(myBook.setIsbn("2322233-BC23333"));
(myBook.setAuthor("Jose"));
(myBook.setEditorial("Planeta"));
console.log(myBook.getTitle());
console.log(myBook.getnPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());


console.log(myBook.toString());
